// 75 == [ 1, 0, 0, 1, 0, 1, 1 ]
// 339 == [ 1, 0, 1, 0, 1, 0, 0, 1, 1 ]

let bin = [ 1, 0, 1, 0, 1, 0, 0, 1, 1 ]

console.log("Biin: ", bin)

// bin = bin
let decimal = bin.reverse().reduce((pv, cv, idx) => {
  console.log("  --> ", Math.pow((cv * 2), idx))
  return pv + Math.pow((cv * 2), idx)
}, 0)

console.log('Decimal', decimal)

