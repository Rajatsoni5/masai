//Create Custom Hindi Array functions

//Array Connstructor function

let a1 = new Array("x", "y", "z");

//arguments object
//this -> object
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
