
// Mean Median Mode

// Mean   = Average
// Median = Is the middle number from least to greates, if there is two then is the average of the two center
// Mode   = The most common number.


// ------------------------------------------------------------------------------------
const mean = (arr) => {
  return (arr.reduce((pv, cv) => { return pv + cv }, 0) / arr.length).toFixed(2)
}
// console.log( mean( [2, 2] ) );


// ------------------------------------------------------------------------------------
const median = (arr) => {
  let result = 0
  arr = arr.sort((a, b) => { return a - b })
  if(arr.length % 2 === 0){
    result = ( ( arr[arr.length / 2] ) + ( arr[(arr.length / 2) - 1] ) ) / 2
  }else{
    result = arr[Math.floor(arr.length / 2)]
  }

  return result.toFixed(2)
}
// console.log( median([1, 2, 3, 4]) )


// ------------------------------------------------------------------------------------
const mode = (arr) => {
  const values = arr.reduce((pv, cv) => {
    pv[cv] = (pv[cv] + 1) || 1
    return pv
  }, {})


  let max = 0
  let tda = Object.entries(values)
  tda.forEach((x) => { if(x[1] > max){ max = x[1] } })
  // Object.entries(values).forEach((x) => { if(x[1] > max){ max = x[1] } })


  let results = []
  for(z in values){
    if(values[z] === max){ results.push(z) }
  }

  return (Object.keys(values).length === results.length) ? [] : results
}
// console.log( mode([1, 2, 3, 4, 4, 4, 5, 6, 7, 8]) );


// ------------------------------------------------------------------------------------
const combo = (arr) => {
  let data = {}
  data.mean = mean(arr)
  data.median = median(arr)
  data.mode = mode(arr)

  // console.log(data);
  return data
}

// console.log( combo([2, 8, 1, 6, 4, 7, 9, 5, 5, 7, 7, 7, 6, 7, 7, 1, 9, 1, 2, 3, 4, 1, 2, 3, 9, 9]) );
console.log( combo([9, 10, 23, 10, 23, 9]) );






// ---------------------------------------------------------------------------
// const mode = (arr) => {
//   const values = arr.reduce((pv, cv) => {
//     pv[cv] = (pv[cv] + 1) || 1
//     return pv
//   }, {})
//
//   let num = 0
//   let max = 0
//
//   for(z in values){
//     if(values[z] > max){
//       max = values[z]
//       num = z
//     }
//   }
//
//   return num
// }
