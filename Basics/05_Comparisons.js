// < <= > >= == != etc
console.log(null >= 0)
console.log(null > 0)// Comparators such as < <= > >= convert null to 0
console.log(null == 0)// false

console.log("02" >= 1)//True String can be compared with  a number not possible in c++ or py 
// Gives Error cout << ("02" > 1);
// Also some abnormalities may arise while comparing two differentdatatypes

// == and comparators work differently in JS
console.log(undefined == 0)// false
console.log(undefined >= 0)// false
console.log(undefined <= 0)// false

// Strict Check
console.log("02" === 2)// False  as === compares both datatypes and values
