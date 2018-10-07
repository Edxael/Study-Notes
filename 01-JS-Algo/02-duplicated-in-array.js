
// Instructions.
// 01- create an array from 0 to 11 numbers inside
// 02- insert a duplicate number in a random place
// 03- create a function that finds waht is the duplicate number.

const dup = (arr) => {
let dup = 0
arr.map((c, i) => { if(i !== arr.indexOf(c)){ dup = c } })
return `The duplicated number is: ${dup}`
}

let myArr = Array(11).fill(1).map((c, i) => { return i })  // Creating the array
myArr.splice(Math.floor(Math.random() * 10), 0, Math.floor(Math.random() * 10))  // inserting raundom number in random position.
console.log(myArr);

console.log(dup(myArr))


