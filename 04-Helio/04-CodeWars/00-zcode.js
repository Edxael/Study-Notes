

function remove(s){

  var arr = s.split('').filter(function(n){ return n != "!" });
  arr.push("!");
  var str = arr.join("");
  return str;

}


var s = "Hi! Hi!";
console.log( remove(s) );
