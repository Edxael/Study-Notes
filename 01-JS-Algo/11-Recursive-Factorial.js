
const myFactorial = (num) => {
  if(num === 1){ return num }
  else{ return num * myFactorial(num -1) }
}

console.log(myFactorial(4));


// ----------------------------------------------------------
// Semi Recursive

// const myFactorial = (num) => {
//   let total = 1
//
//   const myRec = (num) => {
//     if(!num){ return total}
//     total *= num
//     // console.log(total, " -- ", num);
//     myRec((num - 1))
//   }
//
//   myRec(num)
//   return total
// }

// ---------------------------------------------------------
// No Recursive

// const myFactorial = (num) => {
//   return Array(num).fill('a').map((x, i) => {return i + 1}).reduce((pv, cv) => {return pv * cv }, 1)
// }
