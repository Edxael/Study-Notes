

// const items = { oranges: 5, potatoes: 2, apples: 7 }
//
// console.log(items);
//
// const invent = Object.entries(items);
// console.log(invent);



// Person 1
const person1 = {
words: "Hello I'm Peron 1",
speak: function() { console.log(this.words); }
}
person1.speak();  // Meow



// Person 2
const person2 = {
words: "Hello I'm Peron 2",
speak: () => { console.log(this.words); }
}
person2.speak();  // undefined
