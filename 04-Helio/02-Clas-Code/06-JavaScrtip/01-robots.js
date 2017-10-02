console.log("Hello from robots.js");
console.log("");

// --------------------------- Code Creation --------------------------------
const factions = ["Autobots", "Decepticons"];

const robot1 = {
  name: "Optimus Prime",
  faction: factions[1],
  shape: "Semi-Truck",
  power: "Roll Fast"
}


const robot2 = {
  name: "Megatron",
  faction: factions[2],
  shape: "Figtrher Jet",
  power: "Fly"
}


// ------------------- Loging out the Objects -------------------------
console.log(robot1);
console.log(robot2);
console.log("");




// --------------------- Functions ------------------------------
const optimusHello = () =>{
  console.log(`Hello im ${robot1.name}`);
}

const megatronHello = () =>{
  console.log(`Hello im ${robot2.name}`);
}


// ----------------------- Executing functions --------------------------

optimusHello();
megatronHello();
