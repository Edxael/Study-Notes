function getMiddle(s){

  if(s.length === 0){
    return s;
  }else if (s.length % 2 === 0){
    let arr = s.split("");
    let letter1 = arr[(arr.length / 2) - 1];
    let letter2 = arr[arr.length / 2];
    return letter1 + letter2;
  }else {
    let arr = s.split("");
    let letter = arr[Math.floor(arr.length / 2)];
    return letter;
  }
}


var s = "A"
console.log(getMiddle(s));
