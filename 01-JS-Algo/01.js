// Given a string return the first letter that is repeated

let s1 = 'DBCABA'

const t1 = (s) => {
  console.log(s)
  let obj = {}

  return s.split("").map((x) => {

    if(obj.hasOwnProperty(x)){
      return x
    }else{
      obj[x] = 1
    }

  }).filter((x) => { return x !== undefined })[0]
}


console.log( "The answer is: ", t1(s1) )
