var myName = "Valendra";
let age = 20;
const fatherName = "Santosh Singh"
sister = "Shalini"

console.table([fatherName, myName, age, sister]);

myName = "Vale";
age = 21;
sister = "Nidhi";

console.table([fatherName, myName, age, sister]);

// Don't Use var anymore because it doesn't have block scope
// Use let or const
// let and const has block scope 
// let has to be declared before using it
// let cannot be redeclared again in the same scope but its value can be changed
// var has global scope and not block scope and it can be used even before declaration and it can be redeclared in the same scope

