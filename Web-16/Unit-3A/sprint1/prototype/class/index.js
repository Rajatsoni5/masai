const cat = {
    legs: 4,
    tail: true,
    furs: true,
    jumping: true,
    claws: "sharp",
};

//effecient way - object.create()

const tiger = Object.create(cat);
console.log("tiger", tiger)


function student(n,a) {
    this.name = n;
    this.age = a;
};

// when you make a constructor fun. it will stire value in obj not in prototype

// student.prototype.course = "fswd";
// This will store under prototype

// let s1 = new student("rocky", 2); 
// console.log("s1", s1)

student.prototype.bio = function () {
  console.log(`hello from ${this.name}`);
};



let s1 = new student("saber", 3);

s1.bio();

console.log("s1", s1)

function flipkart(t,b,p) {

    this.shoetype = t;
    this.brand = b;
    this.price = p;
};


let s2 = new flipkart("sneaker", "nike", 2000)

// adding couppon with 2 methond

// methond-1
// flipkart.prototype.coupon = "20%off"

// method-2
flipkart.prototype.coupon = function(){
    console.log("20%off on this product")
}

s2.coupon();


console.log("s2", s2)


// --------------------------------------------------------------

// let arr = [1, 2, 3];

// arr.__proto__.myProp = "random";

// let arr2 = [4, 5, 6];

// console.log(arr.myProp);

//1. arr
//pop

//Create Custom Hindi Array functions
//Array Connstructor function

let a1 = new Array("x", "y", "z");

// //arguments object
// //this -> object

function myArray() {
  Object.defineProperty(this, "length", {
    value: 0,
    writable: true,
    enumerable: false, //dont count this property
  });

  this.length = arguments.length;

  // 0: x
  // 1: y
  // 2: z
  // 3: a - last

  //  lhs(index) = rhs(value)

  for (let i = 0; i < this.length; i++) {
    this[i] = arguments[i];
  }
}

let a2 = new myArray("x", "y", "z");

myArray.prototype.पुश = function (value) {
  let index = this.length;
  this[index] = value;
  this.length++;
};

myArray.prototype.हटाओ = function () {
  let index = this.length - 1;

  delete this[index];

  this.length--;
};

a2.पुश("a");
a2.पुश("b");
a2.हटाओ();
a2.हटाओ();

console.log("a2:", Object.values(a2));