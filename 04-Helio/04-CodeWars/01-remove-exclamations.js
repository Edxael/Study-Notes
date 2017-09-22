
Location of Kata:
https://www.codewars.com/kata/57faf12b21c84b5ba30001b0/solutions/javascript


function remove(s){

  var arr = s.split('').filter(function(n){ return n != "!" });
  arr.push("!");
  var str = arr.join("");
  return str;

}


var s = "Hi! Hi!";
console.log( remove(s) );
