var age = 15;

var age = 24;
var age = 6;

console.log(age); //we can redeaclare var and it print last update value 
//but in case of let it throws an error
// remove // from line 10 and 11 to see error 
let roll=10;
//let roll=11;       
//let roll=15;
console.log(roll);
//there are 2 reason to use let rather than var 1. redeclartion of variable  2.scope as var has global scope where let and const have block

const name="bharat";
// const is used when i do not want to change value of varibale in future
let a;
console.log(typeof(a));  // undefined 
//const b;  
//const b will show error Missing initializer in const declaration  (to see error in browser please uncomment line 18)