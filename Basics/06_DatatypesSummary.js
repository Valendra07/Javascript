// Primitive 
// 7 types => Numbers, Boolean, Strings, null, undefined, symbols=> to make an element unique

// Reference or NonPrimitive
// Array, Objects, Functions

/*JavaScript is a dynamic language and not static, which means that variables can hold values of different types during runtime. */

let num = 4.5
const isLogged = true
const temp = null// null does not mean empty it means nothing
let name = "Valendra"
let some;//Undefined
let someThing = undefined

//Symbols
const id1 = Symbol("123")
const id2 = Symbol("123")
console.log(id1 === id2)


// BigInt
const bigNumber = 1354187465978168454786522781654n // Use n

// Object stores key value pair
let details = {
    name : "Valendra",
    age : 20,
    married : null,
    id : Symbol("123")
}

// Arrays Object

const arr = ["Vale", 25, "Dangi"]
console.log(arr)// Valid


// Function Object
const myFunction = function print(){ // function as a variable
    console.log("Valendra");
}

console.log(typeof arr)

/* 

type of Operator
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object


       // Doubt in differences between primitive and non primitive datatypes
*/



