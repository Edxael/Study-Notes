console.log('Cowboys Playoffs');
console.log("The Dallas team had a rough season and barely have enough points to have a chance to to the playoff, in order to pass they need to win tomorrow game vs the Packers, and the Phi. Eagles need to loose vs the Clevlealnd Browns.....");


let dallas_vs_Packers = new Promise((win, loose) => {
  setTimeout(() => { win("Half Way there...") }, 1500);
  setTimeout(() => { loose("Cowboys Lose, Season is Over...") }, 2500);
});

let brown_vs_eagles = new Promise((win, loose) => {
  setTimeout(() => { win("Playoff here we go...") }, 500);
  setTimeout(() => { loose( "Eagles won, Season is Over...") }, 1500);
});

Promise.all([dallas_vs_Packers, brown_vs_eagles])
  .then((results) => { console.log(results); })
  .catch((err) => { console.log(err); })


console.log("Asic Code runing...");
