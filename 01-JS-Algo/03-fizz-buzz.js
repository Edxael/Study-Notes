// /3 Fizz
// /5 Buzz
// /3 & /5 Fizz-Buzz

const fizz = (num) => {
  const data = Array(num + 1).fill('a').map((c, i) => {
    return ((i % 3 === 0) && (i % 5 === 0) ) ? `Number ${i} is Fizz-Buzz`:
     (i % 3 === 0) ? `Number ${i} is Fizz` :
     (i % 5 === 0) ? `Number ${i} is Buzz` : `Number ${i} N/A`

  })
  data.forEach((x) => { console.log(x); })
  return data
}

console.log( fizz(20) );


// --------------------------------------------------------------------------
// Practice Code

const fizz = (num) => {
  let data = new Array(num)
                .fill('a')
                .map((c, i) => { return i +1 })
                .map((x) => { return (x % 3 === 0 && x % 5 === 0) ? `The number: ${x} is Fizz-Buzz` :
                  (x % 3 === 0) ? `The number: ${x} is Fizz` :
                  (x % 5 === 0) ? `The number: ${x} is Buzz` : `The number: ${x} N/A`
                 })
  return data
}

console.log( fizz(15) )
