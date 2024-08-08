// In primitive datatypes a copy is passed whenever we copy a variable changes in the copy dont affect the original variable
// In reference datatypes a reference to the memory in heap is passed changes done through the variable changes the original data in the heap.

let age = 10;
let newAge = age;

newAge++
console.log(age)
console.log(newAge)

let obj = {
    name: "Valendra",
    age: 20,
}

let newObj = obj

newObj.name = "Thakur Valendra"// name 's value is changed data of heap memory obj and newObj are both pointing to the same memory

console.log(obj)

// Stacks stores copy of variable whereas heaps stores the data and return the reference to it
