console.log("Fizz-Buzz");


function fizz1(num){

  for(let x = 0; x <= num; x++){
    if(x % 5 ===0 && x % 3 === 0){
      console.log(`The number ${x} is Fizz-Buzz`);
    }else if (x % 3 === 0) {
      console.log(`The number ${x} is Fizz`);
    }else if (x % 5 ===0) {
      console.log(`The number ${x} is Buzz`);
    }else{
      console.log(`The number ${x} is ...`);
    }
  }

}



fizz1(10);
