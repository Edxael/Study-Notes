const orgDups = (arr) => {

  let answer = []

  const objHold = arr.reduce((pv, cv) => {
    pv[cv] = (pv[cv] + 1) || 1
    return pv
  }, {})

  for(z in objHold){
    answer.push(Array(objHold[z]).fill(z))
  }

  answer = answer.sort((a, b) => { return a.length - b.length })

  console.log(objHold);
  return answer
}

console.log( orgDups([3, 2, 6, 2, 1, 3]) );








// function group(arr){
//   console.log(arr);
//   let arr1 = arr.sort((a, b) => { return a - b }).reverse();
//   console.log(arr1);
//   let arr2 =[['d']];
//
//   arr1 = arr1.map((c, i, a) => {
//
//     if(c == arr2[arr2.length -1][0]){
//       arr2[arr2.length -1].push(c);
//     }else{
//       arr2.push([c]);
//     }
//
//   })
//
//   arr2.shift();
//   arr2 = arr2.sort((a, b) => { return b.length - a.length })
//
//   console.log(arr2);
//   return arr2;
//
// }

///////////////////////////////////////////////////////////////////

const orgDups = (arr) => {

  let answer = []

  const objHold = arr.reduce((pv, cv) => {
    pv[cv] = (pv[cv] + 1) || 1
    return pv
  }, {})

  for(z in objHold){
    answer.push(Array(objHold[z]).fill(parseInt(z)))
  }

  answer = answer.sort((a, b) => { return a.length - b.length })

  let scidx = 0
  let ln = 1
  let second = [[]]

  for(let x = 0; x < answer.length; x++){
    if(answer[x].length === ln){ second[scidx].push(answer[x]) }
    else {
      second.push([answer[x]])
      scidx = scidx + 1
      ln = ln + 1
      // second[scidx].push(x)
    }
  }

  for(let x = 0; x < second.length; x++){
    second[x].reverse()
  }

  second = second.reverse()

  let tri = ["a"]
  let newArr = []
  for(let x = 0; x < second.length; x++){
    // console.log(second[x]);
    // tri.concat(second[x])
    newArr = newArr.concat(second[x])
  }


  console.log("    ");
  console.log(objHold);
  console.log(answer);
  console.log(second);
  return newArr
}
