

for(var x = 1; x <= 100; x++){
  if((x % 3 === 0) && (x % 5 === 0)){
    console.log("Number: " + x + " Is Fizz-Buzz");
  }else if (x % 3 === 0) {
    console.log("Number: " + x + " Is Fizz");
  }else if (x % 5 === 0) {
    console.log("Number: " + x + " Is Buzz");
  }else {
    console.log("Number: " + x );
  }
}
