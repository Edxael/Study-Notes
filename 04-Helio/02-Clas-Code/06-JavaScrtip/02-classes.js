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
const shiru = new SaintSeiya('Shiru', 'China', 'Cosmos', 'Dragon');
const shiru = new SaintSeiya('Yoga', 'Norway', 'Cosmos', 'Cisne');
const shiru = new SaintSeiya('Iki', 'Italy', 'Cosmos', 'Phoenix');


const asuka = new Evangelion('Asuka L. Sorouyo', 'Germany', 'ATA Field', 'Unit: 2');

// ------------- Login results to console -------------
console.log(shiru);
console.log(asuka);

// ----------------- Storing in arrays -------------------
