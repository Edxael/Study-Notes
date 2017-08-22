
function getMiddle(s){

  if(s.length === 0){
    return s;
  }else if (s.length % 2 === 0){
    let arr = s.split("");
    // console.log(arr);

    let letter1 = arr[(arr.length / 2) - 1];
    // console.log(letter1);

    let letter2 = arr[arr.length / 2];
    // console.log(letter2);

    return letter1 + letter2;
  }else {
    let arr = s.split("");
    let letter = arr[Math.floor(arr.length / 2)];

    // consoles
    return letter;
  }

}



var s = "testing"
console.log(getMiddle(s));
