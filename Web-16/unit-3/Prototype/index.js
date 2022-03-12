
const cat = {

    name: 'cat',
    legs: 4,
    furs:true,
    tail:true,
    sub_type: "mammal",

};

// const tiger = {

//     name: 'tiger',
//     legs: 4,
//     furs:true,
//     tail:true,
//     sub_type: "mammal",

// };

// const lion = {

//     name: 'lion',
//     legs: 4,
//     furs:true,
//     tail:true,
//     sub_type: "mammal",

// };

// inheritance apply to to keep it short
// object.create

const tiger = Object.create(cat, {name: {value:"sher"}})
// name has assigned to tiger's name and rest value take from cat
console.log('tiger:', tiger)


// ********prototype chain

let grandfather = {

    eyes: 'Blue',
}

let father  = Object.create(grandfather);

let son = Object.create(father);
console.log("son:", son)


// **********has own property

function shoe() {

    this.brand = "addias",
    this.type = 'Sneaker',
    this.seller = 'flipkart'
};

// let s1= new shoe("sneaker");

// shoe.prototype.sale = function(){
//     console.log('20% off')
// }
// console.log("s1:", s1);

// Array

// alternate to console --> use print and type the msg
function print(msg) {
    console.log(msg);
};
print("hey");

let arr = new Array(1,2,3,4,5,6);
console.log("arr:", Object.values(arr));

function Array() {
    // this.length = arguments.length;

    Object.defineProperty(this, "length", {
        value: 0, //better than undefind
        writable: true, //imp
        enumerable: false, //could be omitted
    });

    for(let i=0; i<arguments.length; i++){

        this[i] = arguments[i]
    };
};

Array.prototype.ok = function(value) {


    this.length++; 
};