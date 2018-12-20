// Josephus permution

console.log("Hello world")


let num = 75
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

console.log(arr.reverse())




// From Decimal --> Binary   solution1
// let num = 339
// let baseArr = []
// let binCons = []
// let acumulator = 1

// while(acumulator <= num){
//   baseArr.push(acumulator)
//   acumulator = acumulator * 2
// }

// baseArr = baseArr.reverse()
// console.log("BseArray: ", baseArr)
// console.log("BseArray: ", baseArr.length)

// for(let x = 0; x <= baseArr.length -1; x++){
//   if(baseArr[x] <= num){
//     binCons.push(1)
//     num = num - baseArr[x]
//   }else{
//     binCons.push(0)
//   }
// }

// console.log(" ")
// console.log("BinArr: ", binCons)
// console.log("BinArr: ", binCons.length)

