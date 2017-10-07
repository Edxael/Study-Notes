console.log("Listen to the cats...");


    // Cat 1
const cat1 = {
  sound: 'Meow',
  speak: function() { console.log(this.sound); }
}
cat1.speak();  // Meow



    // Cat 2
const cat2 = {
  sound: 'Meow',
  // speak: () => { console.log(this.sound); }
  speak: () => { console.log(cat2.sound); }
}
cat2.speak();  // undefined







// let person2 = {
//   name: 'Zike'
// }
//
// function namer() {
//   return this.name;
// }
//
// console.log( namer.bind(person2)() );
