
console.log("Practicing Arrow Functions... \n ");

//
// let person1 = {
//   name: 'Alex',
//   speak: function(){ console.log("My name is: ", this.name, " \n "); }
// };
//
// let person2 = {
//   name: 'Zike',
//   speak: () => { console.log("My name is: ", this.name, " \n "); }
// }
//
//
//
//
// let h1 = person1.speak.bind(person1);
// h1()
//
// let h2 = person2.speak.bind(person2);
// h2()


const person1 = {
  name: "Mike",
  speak: function(){ console.log("My name is: ", this.name); }
}

const presentation1 = person1.speak.bind(person1);
presentation1();



const person2 = {
  name: "Hector",
  speak: () => { console.log("My name is: ", this.name); }
}

const presentation2 = person2.speak.bind(person2);
presentation2();
