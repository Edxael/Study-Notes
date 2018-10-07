
// Bubble Sort
// It takes an array of numbers and return it sorted from least to greates

const bubbleSort = (arr) => {

  for(let x = arr.length; x > 0; x--){
    for(let y = 0; y < x; y++){

      if(arr[y] > arr[y + 1]){
        let temp = arr[y]
        arr[y] = arr[y + 1]
        arr[y + 1] = temp
      }

    }
  }

  return arr
}

console.log(bubbleSort([3, -9, -12, -1, 8]));
