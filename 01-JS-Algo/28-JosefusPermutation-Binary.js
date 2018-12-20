// Josephus permution
// 7 --> 7
// 5 --> 3
// 6 --> 5
// 3 --> 3
// 4 --> 1
// 8 --> 1
// 13 --> 11
// 14 --> 13
// 41 --> 19


let num = 77
console.log("Solders: ", num)
let arr = []

while(num >= 1){
  if(num % 2 === 0){
    num = num / 2
    arr.push(0)
  }else{
    num = Math.floor(num / 2 )
    arr.push(1)
  }
}

arr = arr.reverse()  // <-- Binary
console.log("The binary: ", arr)

let holder = arr.shift()
console.log("The Holder: ", holder)

arr.push(holder)
console.log("The NewBin: ", arr)

let bin = arr

// console.log("Biin: ", bin)

// bin = bin
let decimal = bin.reverse().reduce((pv, cv, idx) => {
  // console.log("  --> ", Math.pow((cv * 2), idx))
  return pv + Math.pow((cv * 2), idx)
}, 0)

console.log('Last: ', decimal)