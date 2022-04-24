let arr1 = new myArray(1,2,3,4)

function myArray(){
    
  this.length = arguments.length;

  // 0: x
  // 1: y
  // 2: z
  // 3: a - last

  //  lhs(index) = rhs(value)

  for (let i = 0; i < this.length; i++) {
    this[i] = arguments[i];
  }
};

// let arr = new myArray(1,2,3,4)
console.log("arr1", arr1)

// myArray.prototype.push = function (index){

// // this.value = 
// this.index= this.length+1;

// this.length++;
// }
// arr1.push(6)

myArray.prototype.pop = function (index){


}

myArray.prototype.print = function (index){

    console.log(arr1)
}
arr1.print()