console.log("Cartoon Characters construction");

// -------------- Paren Class -----------
class CartoonCharacter {
  constructor(name, country, power) {
    this.name = name;
    this.country = country;
    this.power = power;
  }
}


// -------------- Children Classes ---------
class Evangelion extends CartoonCharacter {
  constructor(name, country, power, eva) {
    super(name, country, power);
    this.eva = eva;
  }
}

class SaintSeiya extends CartoonCharacter {
  constructor(name, country, power, armor) {
    super(name, country, power)
    this.armor = armor;
  }
}


// ------------- Constructing Instances -----------
const knights = [];
const pilots = [];

knights.push(new SaintSeiya('Shiru', 'China', 'Cosmos', 'Dragon'));
knights.push(new SaintSeiya('Yoga', 'Norway', 'Cosmos', 'Cisne'));
knights.push(new SaintSeiya('Iki', 'Italy', 'Cosmos', 'Phoenix'));


pilots.push(new Evangelion('Asuka L. Sorouyo', 'Germany', 'ATA Field', 'Unit: 2'));
pilots.push(new Evangelion('Mari Kondo', 'Japan', 'ATA Field', 'Unit: 4'));
pilots.push(new Evangelion('Shinji Ikari', 'Japan', 'ATA Field', 'Unit: 1'));

// ------------- Login results to console -------------

console.log(knights);
console.log(pilots);


console.log("");
console.log("First Elements: ");
console.log(knights[0]);
console.log(pilots[0]);


console.log("");
console.log("Last Elements");
console.log(knights[knights.length -1]);
console.log(pilots[pilots.length -1]);






// --------------------------- Array of Objects --------------------------

console.log("Hello World 24");

const scores = [92, 87, 54, 63, 75, 59, 100];
const graduation = scores.filter( (result) => { return result > 60 } );
console.log(graduation);

console.log("");
console.log("");


const forecast = [
  {day:"Monday" , sun: true},
  {day:"Tuesday" , sun: false},
  {day:"Wednesday" , sun: false},
  {day:"Thrusday" , sun: true},
  {day:"Friday" , sun: false},
  {day:"Saturday" , sun: true},
  {day:"Sunday" , sun: false}
];

// const sunnyDays = forecast.filter((day) => { return day.sun == true });
const sunnyDays = forecast.filter((day) => day.sun == true );

console.log(sunnyDays);
