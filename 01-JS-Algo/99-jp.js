
// -------------------------------------------------
// Recursive Fibonacci Function

const myFib = (num) => {
  const serie = [0, 1]
  let count = 2

  const myRecFun = (count) => {
    if(count === num + 1){ return }
    serie.push((serie[count - 1]) + (serie[count - 2]))
    myRecFun(count + 1)
  }

  myRecFun(count)
  return serie
}

console.log(myFib(7))


// -------------------------------------------------
// Converst a 1 Dim array to 2 Dim arrays

const twoDim = (arr, num) => {
  const holder = []

  while(arr.length > 0){
    holder.push( arr.splice(0, num) )
  }

  return holder
}

console.log( twoDim([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) )


// -------------------------------------------------
// Find the mospopular letter in a string

const maxChar = (str) => {
  const mapObj = str.split('').reduce((pv, cv) => {
    pv[cv] = (pv[cv] + 1) || 1
    return pv
  }, {})

  let max = 0, letter = ''

  for(z in mapObj){
    if(mapObj[z] > max){
      max = mapObj[z]
      letter = z
    }
  }

  return letter

}

console.log( maxChar('laksdjf;laskdfjlaskfdjalskfjd;laksjdfsdfkjdfkkldkjfldkjflskdjflskf') )


// -------------------------------------------------
// Bubble Sort

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

console.log(bubbleSort([8, 6, 1, 9, 3, 1, 7, 9, 7, 4, 5]));


// -------------------------------------------------
// MERGE SORT

const mergeSort = (arr1, arr2) => {
  const temp = []

  while(arr1.length || arr2.length){
    if(arr1[0] < arr2[0]){
      temp.push( arr1.shift() )
    }else{
      temp.push( arr2.shift() )
    }
  }

  return temp
}

console.log( mergeSort( [2, 9, 12, 22, 34, 50], [3, 7, 11, 16, 22, 35, 42, 55, 65, 75, 85, 95] ) );


// -------------------------------------------------
//  TWO SUM

const twoSum = (arr, num) => {
  const table = []
  const results = []

  for(let x = 0; x < arr.length; x++){
    let currentNumber = arr[x]
    let counterpart = num - currentNumber

    if(table.includes(counterpart)){ results.push( [currentNumber, counterpart] ) }
    table.push(currentNumber)
  }

  return results
}


console.log( twoSum([1, 6, 4, 5, 3, 3], 7) )



// -------------------------------------------------
// Find what letter has the most occurances

const  maxOcc = (str) => {
  const myObj = str.toLowerCase().split("").filter((x) => { return x.match(/[a-z]/) })
                    .reduce((pv, cv) => {
                      pv[cv] = (pv[cv] + 1) || 1
                      return pv
                    }, {})
  let max = 0
  let cha = ""

  Object.keys(myObj).forEach((x) => {
    if(myObj[x] > max){
      max = myObj[x]
      cha = x
    }
  })

  return `The most repeated character is ${cha} with ${max} occurances.`
}


console.log( maxOcc("peter's piper pizza pure perfection and Pride PpP........................PPp") );

// The most repeated character is p with 13 occurances.
// -------------------------------------------------
