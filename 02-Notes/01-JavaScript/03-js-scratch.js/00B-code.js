
console.log("Listen to the cats...");

new Array(101).fill().map((x, idx) => { console.log(  ((idx % 3 == 0) && (idx % 5 == 0)) ? `${idx} is Fizz-Buzz` :  (idx % 3 == 0) ?  `${idx} is Fizz` : (idx % 5 == 0) ?  `${idx} is Buzz` : `${idx} is ...`  ) })

// A logic Game - from Vikings.
// http://blog.mycode.website/a-logic-game/















// let person1 = {
//   name: 'Alex'
// };
//
// let person2 = {
//   name: 'Zike'
// }
//
// function namer() {
//   return this.name;
// }
//
// console.log( namer.bind(person2)() );



// new Array(201).fill().map((x, idx) => idx).map((x) => { return ((x % 5 == 0) || (x % 3 == 0)) ? `${x} is Fizz-Buzz` : (x % 3 == 0) ? `${x} is Fizz` : (x % 5 == 0) ? `${x} is Buzz` : `${x} is...` }).map((x) => { console.log(x) })
// console.log(nums);
