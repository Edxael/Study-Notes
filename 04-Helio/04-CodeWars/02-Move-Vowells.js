
// https://www.codewars.com/kata/move-all-vowels/javascript
// Given a string as input, move all of its vowel to the end of the string.
// Example input: day Example output: dya
// Example input: apple Example output: pplae
// Note: All input string are of small letters, and the order of the vowels at the end should be the same as they were before.


function moveVowel(str) {

  const arr = str.split("");
  const vow = [];

  for( x in arr ){
    if(arr[x].match(/[aeiou]/)){
      vow.push(arr[x]);
      arr[x] = undefined;
    }
  }

  return arr.filter((n) => n != undefined).concat(vow).join('');

}


const str = "BlackPink";
console.log(moveVowel(str));
