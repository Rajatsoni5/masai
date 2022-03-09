// *****************************************variables

// var b = 'smoothies'
// console.log(b);

// cousin of alert
// var age= prompt('what is your age?');

// get the value and print
// document.getElementById('sometext').innerHTML = age;

// ************************************Numbers in js

// var num1 = 7;
// can make chnages by below (cuz code work up to down)
// Here's the new num1 value (Increment)
// num1 = num1 + 2;
//you can write "num1++"" as well 
//(you can decrement by Num1--)can divide /, multiple * and remander %
// console.log(num1*2)

// Increment/decrement by any number
// num1 += 20
// console.log(num1)


// *************************************Functions
// 1* create the function
// 2* call the function

// function fun() {
//     alert("hello")
// }

// call the function to see activity of above written function
// fun();
// done you called it and your fuction is working


// example of new funtion 



// function greetings(yourName){
    
    // var result = 'Hello ' + yourName;  // string concatenation

    // choose any from below to function to see the activity

    // document.getElementById('sometext').innerHTML = result;
    // console.log(result);
// };

// var name = prompt('what is your name?')
// greetings(name);



//**************************How do arguments work in functions?
// how do we add 2 numbers together in a functions?

// function sum(num1,num2) {

//     var result = num1 + num2;

//     console.log(result);
// }

// Put the value while calling function so that values will assign accordingly.
// choose any option below to see the result respectively.
// sum("Hello ", "rajat");
// sum(2,3)


// *************************while and for loops in js
// while loops


// var num = 0;

// while(num < 100){
//     num += 10;
//     console.log(num);
// }

// for loop

// for(let num =0; num<=100; num++){
//     console.log(num)
// }


//*********************************Data types in js

let yourage =20; // Number
let yourname = 'Rajat'; // string
let name = {first:'Rajat', last:'soni'} // object
let truth = false; //Boolean
let arr = ['one','two','three']; //array
let random; //undefind
let nothing = null; //value null


// *************************** strings(common method)

// let fruit = 'Apple';
// let  morefruits = 'banana/kiwi';

// console.log(fruit.length)
// console.log(fruit.indexOf('e')) //this will get the location
// console.log(fruit.indexOf('g')) //as "g " is not in  fruit so it'll give -1
// console.log(fruit.slice(2,4)) // it will give the value from 2-4
// console.log(fruit.replace('A', '24')) //replacement
// console.log(fruit.toUpperCase()) //can do it to lowercase as well
// console.log(fruit[1]) //check what's there at 1/2/3/4/5

// console.log(fruit.split('')) // split by character
// console.log(fruit.split(',')) //split by comma and give value in array


// **************************** Array

/*
let fruits = ['banana', 'apple', 'kiwi', 'orange'];

fruits = new Array('banana', 'apple', 'kiwi', 'orange');

console.log(fruits[2]) //access the value by index 0/1/2/3/4

fruits[0] = 'pear' //value changed
console.log(fruits)

for(let i=0; i<fruits.length; i++){
    console.log(fruits[i])
}
*/

//****************** Array common Method
/*
console.log('to string', fruits.toString()) //change the array to string
console.log(fruits.join(' - ')) //"-" added between the fruits
console.log(fruits.pop(), fruits) // deleted the last value
console.log(fruits.push("newfruit"), fruits) //added to the existing array

fruits[fruits.length] = 'extraone' //same as push
console.log(fruits);

fruits.shift(); //remove the first element
console.log(fruits)

fruits.unshift('ok'); //add to first place
console.log(fruits)

let veggie = ['tomato', 'patato', 'brocoli'];
let allgro = fruits.concat(veggie); //combine array
console.log(allgro)
console.log(allgro.slice(2,6))

console.log(allgro.reverse()) //it will reverse the complete array
console.log(allgro.sort())


let number = [1,2,4,45,6,7,33,8,9];
console.log(number.sort(function(a,b){ return a-b})) //sort in accending
console.log(number.sort(function(a,b){ return b-a})) // sort in decending

let emptyarr = new Array();
for(let num=0; num<=10; num++){
    emptyarr.push(num);
}
console.log(emptyarr)
*/



//************************Object in JS
/*
let student = {
    first: 'rajat',
    last: 'soni',
    age: 21,
    height: 173,

    studentInfo: function (){
        return this.first + '\n' + this.last + '\n' + this.age;
    }
}
console.log(student.first);
student.first = 'NameChanged' //change the value
console.log(student.first)
student.age++; //Increment(you can decrement by age--)
console.log(student.age)

console.log(student.studentInfo())
*/

// ********************************if/else condition / control flows
// && AND
// || OR

// var age = prompt('what is your age?')
// if(age >=18 && age <=35){
    // status = 'target demo'
// } else {
    // status = 'Not my audience'
// }


// *********************************** JSON
// refer to new sheet