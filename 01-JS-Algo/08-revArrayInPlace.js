
// Reverse array without using reverse()

// Reverse array without using reverse()

const revArrayInPlace = (arr) => {
  return arr.reduce((pv, cv) => { return [cv].concat(pv) }, [])
}

console.log( revArrayInPlace([1, 2, 3, 4, 5, 6]) )  // [ 6, 5, 4, 3, 2, 1 ]
