
function remove(s){

  var arr = s.split('').filter(function(n){ return n != "!" });
  var str = arr.join("");
  arr = str.split(" ");

  for(x in arr){
    arr[x] = arr[x] + "!";
  }

  return arr.join(" ");

}


var s = "Hi! Hi!";
console.log( remove(s) );
