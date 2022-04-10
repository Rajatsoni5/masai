
// inheritance method
const automobiles = {

   type: "fourwheeler",
    wheels: 4,
    door : 5,
    functionality : "automatic",
};

const sedan = Object.create(automobiles);

const Xuv = Object.create(automobiles);

console.log("sedan", sedan);
console.log("Xuv", Xuv);

// construction function method

function Vehicle(t,r,f) {
    this.type = t;
    this.tyre = r;
    this.functions = f;
};

let hetchback = new Vehicle("fourWheleer",4, "manual")
console.log("hetchback", hetchback)