// What is the most popular letter in the word


const mostPopular = (str) => {
  const tempObj = str.toLowerCase()
                     .split("")
                     .reduce((pv, cv) => {
                       pv[cv] = ( pv[cv] + 1 ) || 1
                       return pv
                     }, {})

  let max = 0
  let cha = ""

  Object.keys(tempObj).forEach( (x) => {
    if(tempObj[x] > max){
      max += 1
      cha = x
    }
  })

  return `The mos common letter in: "${str}" is "${cha}" with ${tempObj[cha]} occurences.`
}


console.log( mostPopular("alabama") )  // The mos common letter in: "alabama" is "a" with 4 occurences.


// -----------------------------------------------------------------------------
/* Write a function that giving a character and a string, 
tells how many times that character is found in that string.
*/


const oc = (chara, str) => {

  const obj = str.split("").reduce((prev, next) => {
    prev[next] = (prev[next] + 1) || 1;
    return prev
  }, {})

  return `The letter: ${chara} is found ${obj[chara]} times in the string: ${str}`

}

console.log(oc("a", "alamadrea"));

