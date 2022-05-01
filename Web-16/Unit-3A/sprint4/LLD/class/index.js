class Vehicle {
    constructor(type, regNumber, color) {
      this._type = type;
      this._regNumber = regNumber;
      this._color = color;
    }
  
    get type() {
      return this._type;
    }
  
    set type(value) {
      this._type = value;
    }
    // getType() {
  
    //   return this.type
    // }
  }
  //car, bike, truck
  
  class Car extends Vehicle {
    constructor(regNumber, color) {
      super("Car", regNumber, color);
    }
  }
  
  //bike and truck?
  
  class Bike extends Vehicle {
    constructor(regNumber, color) {
      super("Bike", regNumber, color);
    }
  }
  
  class Truck extends Vehicle {
    constructor(regNumber, color) {
      super("Truck", regNumber, color);
    }
  }
  
  //getter and setter methods
  
  // let c1 = new Car("MH 12-1234", "Black");
  
  // console.log("c1:", c1.type);
  
  //Individual parking spot
  class Slot {
    constructor(type, number) {
      this.number = number;
      this.type = type;
      this._isBooked = false;
    }
  
    get isBooked() {
      return this._isBooked;
    }
  
    set isBooked(value) {
      this._isBooked = value;
    }
  }
  
  //Individual Floors
  
  class ParkingFloor {
    constructor(floornumber, maxFloor) {
      this.floornumber = floornumber;
      this._parkingspots = []; //we need to push parking slots
  
      //0- trucks
      //we categorized each floor
      for (let i = 0; i < maxFloor; i++) {
        if (i === 0) {
          //push Truck slots
  
          this._parkingspots.push(new Slot("Truck", i));
        } else if (i === 1) {
          //push bikes slots
  
          this._parkingspots.push(new Slot("Bike", i));
        } else {
          //push cars slots
          this._parkingspots.push(new Slot("Car", i));
        }
      }
    }
  
    get parkingspots() {
      return this._parkingspots;
    }
  }
  
  //parkigFloor - slots
  
  //ParkingLot - floors
  
  class ParkingLot {
    constructor(number) {
      this._floors = [];
      this._numberofFloors = number;
  
      for (let i = 0; i < number; i++) {
        this._floors[i] = new ParkingFloor(i, number);
      }
    }
  
    get numberofFloors() {
      return this._numberofFloors;
    }
  
    get floors() {
      return this._floors;
    }
  
    set floors(value) {
      this._floors = value;
    }
  
    parkVehicle(vehicle) {
      let slot = this.findSlot(vehicle.type); //car, bike, truck
  
      if (!slot) {
        console.log("No slots");
        return false;
      }
  
      this.bookslot(slot);
  
      let ticket = new Ticket(slot.floornumber, slot.slot.number);
      console.log("ticket is issued:", ticket);
    }
  
    findSlot(type) {
      //floors - 0 -> 0,1,2
      //floor - 1 -> 0,1,2
  
      //show me all the slots
      for (let i = 0; i < this._numberofFloors; i++) {
        for (let slot of this._floors[i]._parkingspots) {
          if (slot.type === type && !slot._isBooked) {
            return { floornumber: i, slot: slot };
          }
        }
      }
  
      return false;
    }
  
    bookslot(slot) {
      slot.slot.isBooked = true;
      console.log("slot is booked:", slot);
  
      return true;
    }
  }
  
  class Ticket {
    constructor(floorNumber, slotNumber) {
      this.floorNumber = floorNumber;
      this.slotNumber = slotNumber;
  
      this.issuedAt = new Date();
    }
  }
  
  let p1 = new ParkingLot(3);
  
  let b1 = new Bike("MH 12- 1234", "Black");
  
  p1.parkVehicle(b1);
  
  //1. classes
  //2. parking system itself
  
  //0. Vehicles
  //1. Parking Lot
  //2. Parking Floors
  //3. Parking Slots
  //4. Ticket