
// reverse words in string

const revWords = (str) => {
  // return str.split(" ").map((x) => { return x.split("").reverse().join("") }).join(" ")
  return str.split(" ").map((x) => { return x.split("").reduce((pv, cv)=> { return cv + pv }, "")}).join(" ")
}



console.log( revWords("Coding Javascript") );

// "Hola Enfermera"  <---- "aloH aremrefnE"
// "this is a string of words"  <---- "siht si a gnirts fo sdrow"

// -----------------------------------------------------------------------------------

const revWords = (str) => {
return str.split(" ").map((x) => { return x.split("").reverse().join("") }).join(" ")
}

console.log( revWords("Coding Javascript") );
