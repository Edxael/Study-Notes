
// Caesar Cipher

const caesarCipher = (str, num) => {
  num = num % 26   // <---- THis is to over looping if the number provided is too big.
  const letters = 'abcdefghijklmnopqrstuvwxyz'.split('')


  let cypher = str.toLowerCase().split("").map((x, i) => {
    let character = ''
    if(!x.match(/[a-z]/)){ character = x }
    else{
        let newIndex = letters.indexOf(x) + (num)
        if(newIndex > letters.length - 1){ newIndex = newIndex - 26 }
        if(newIndex < 0){ newIndex = newIndex + 26 }


        if( str[i] === x.toUpperCase() ){
          character = letters[newIndex].toUpperCase()
        }else{
          character = letters[newIndex]
        }
    }
    return character
  }).join("")


  return cypher
}

console.log(caesarCipher('Javascript', -900));  // Tkfkcmbszd

// 'Zoo Keeper', 2  // <-- Bqq Mggrgt


// ---------------------------------------------------------------------

    // Another way

    function caesarCipher(str,num) {
      num = num % 26;
      var lowerCaseString = str.toLowerCase();
      var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
      var newString = '';

      for (var i = 0; i < lowerCaseString.length; i++) {
        var currentLetter = lowerCaseString[i];
        if (currentLetter === ' ') {
          newString += currentLetter;
          continue;
        }
        var currentIndex = alphabet.indexOf(currentLetter);
        var newIndex = currentIndex + num;
        if (newIndex > 25) newIndex = newIndex - 26;
        if (newIndex < 0) newIndex = 26 + newIndex;
        if (str[i] === str[i].toUpperCase()) {
          newString += alphabet[newIndex].toUpperCase();
        }
        else newString += alphabet[newIndex];
      };

      return newString;
    }
    caesarCipher('Zoo Keeper', 2);
