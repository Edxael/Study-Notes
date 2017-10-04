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
