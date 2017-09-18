

var counter = 0;

var repetitions = setInterval(function(){
  counter += 1;
  console.log("Repeat Code");
  if(counter >= 5){ clearInterval(repetitions) }
}, 1000);
