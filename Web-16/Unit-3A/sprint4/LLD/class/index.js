class vehicle{

    constructor(type,regNumber,color){

        this._type = type;
        this._regNumber = regNumber;
        this._color = color;
    }


    get type() {
        return this._type
    }

    set type(value) {
        this._type = value;
    }
}


// car, bike,truck

class Car extends vehicle{

    constructor(regNumber,color){
        super("car", regNumber,color);
    }

}

class bike extends vehicle{

    constructor(regNumber,color){
        super("bike", regNumber,color);
    }

}

class truck extends vehicle{

    constructor(regNumber,color){
        super("truck", regNumber,color);
    }

}

// let c1 = new Car('CH01AJ-4336', 'Black');
// console.log("c1", c1._type)

class slot{

    constructor(type, number){

        this.number = number;
        this.type = type;
        this._isBooked = false;
    }

    get isBooked() {
        return this._isBooked
    }

    set isBooked(value) {
        this._isBooked = value;
    }
}

// Indiviual floor

class ParkingFloor{

    constructor(floornumber, maxfloor){

        this.floornumber = floornumber;
        this._parkingspots = []; //we need to push parkingspots

        for(let i=0; i<maxfloor; i++){

            if(i === 0){
                this._parkingspots.push(new slot("truck", i))

            }else if (i== 1){
                this._parkingspots.push(new slot("car", i))

            }else {
                this._parkingspots.push(new slot("bike", i))

            }
        }
    }

    get parkingspots(){
        return this._parkingspots;
    }
}

// let pf1 = new ParkingFloor(0,3);
// console.log("pf1", pf1)

class ParkingLot{

    constructor(number){

        this._floors = [];
        this._numberF = number;

        for(let i=0; i<number; i++){

            this._floors[i] = new ParkingFloor(i, number);
        }

    }

    get numberF(){
        return this._numberF;
    }

    get floors(){
        return this._floors;
    }
}

let pf1 = new ParkingLot(3);
console.log("pf1", pf1)