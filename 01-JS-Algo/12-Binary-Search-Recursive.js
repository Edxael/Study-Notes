
// Returns true if yes false if not key element is in the provided array, using binary search and recursion

const binaryRec = (arr, key) => {
  let midIndex = Math.floor(arr.length / 2)
  let midElement = arr[midIndex]

  if(midElement === key){
    return true
  }else if (midElement < key && arr.length > 1) {
    return binaryRec( arr.splice(midIndex, arr.length), key )
  }else if (midElement > key && arr.length > 1) {
    return binaryRec(arr.splice(0, midIndex), key)
  }else{
    return false
  }
}

const data = [5, 7, 12, 16, 36, 39, 42, 56, 71, 88]

console.log(binaryRec(data, 57));
