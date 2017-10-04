


try{
  const data = -5;
  if(data > 50){
    console.log("Thanks for your generous donation");
    console.log("Please join us for a special dinner this Thrusday");
  }else {
    if(data < 0){
      throw data;
    }
    console.log("Thanks for your donation.");
  }
}catch(er1) {
  console.log("the error is: ", er1);
}

console.log("End of the program");


// -------------------------------------------------------------
console.log(" ");
console.log(" ");
console.log(" ");
console.log("Second Example: ");
console.log(" ");

try {
  console.og("mesate to print");   // <-- I misspell log to create error
} catch (err) {
  console.log("inside Catch");
  console.log("the error is: ", err);
  console.log("");
  console.log(err.name);
  console.log(err.Message);
} finally {
  console.log("Inside Finally");
}

console.log("Final Message");


// Article to read: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling
// --Block statement
// --If statement
// --Falsy values: false, undefined, null, 0, NaN, Emptystring("")
// --switch statement
// --Execption Handeling: try, throw, catch, finally
// --promises.
