
// Fibonaccy
// create a program that create the fibonaccy series from 1 to 100
// A series of number is which each nimber (Fibonaccy number) is the sum of the two preciding numbers.
// Fibonaccy Description: https://www.mathsisfun.com/numbers/fibonacci-sequence.html

let f1 = 0
let f2 = 1
let ct = 0

const ar2 = new Array(100).fill("a").map( (c, i) => { if( i === 0 ){
  return 1
} else if (i === 1) {
  return 1
} else {
  ct = f1 + f2
  f1 = f2
  f2 = ct
  ct = ct
  return ct
}

 } )

console.log(ar2)
