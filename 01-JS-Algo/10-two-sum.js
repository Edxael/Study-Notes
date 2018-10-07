
// Return an array fill with all the pairs of the array that sum equal num.
//     Example
// Inputs: arr = [1, 6, 4, 5, 3, 3]  num = 7
// Return: [[6, 1], [3, 4], [3, 4]]

const twoSum = (arr, num) => {

  let uniTable = []
  let pairs = []


  for(let x = 0; x < arr.length; x++){

    let currNum = arr[x]
    let counterpart = num - currNum

    if(uniTable.includes(counterpart)){ pairs.push([currNum, counterpart]) }
    uniTable.push(currNum)
  }

  return pairs
}


console.log( twoSum([1, 6, 4, 5, 3, 3], 7) )
// console.log( twoSum([40, 11, 19, 17, -12], 28) )






// const twoSum = (arr, num) => {
//   console.log(arr);
//   console.log(" ");
//
//   let uniTable = []
//   let pairs = []
//
//
//   for(let x = 0; x < arr.length; x++){
//
//     let currNum = arr[x]
//     let counterpart = num - currNum
//
//     if(uniTable.includes(counterpart)){ pairs.push([currNum, counterpart]) }
//     uniTable.push(currNum)
//
//     console.log(currNum);
//     console.log(uniTable);
//     console.log(pairs);
//     console.log(" ");
//     console.log(" ");
//   }
//
//
//   // return (!arr.includes(num)) ? true : false
//   return pairs
// }
