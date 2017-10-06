console.log('Hello Prom');

let myProm = new Promise((resolve, reject) => {

  setTimeout(() => { resolve("Good to Go..") }, 1500);
  setTimeout(() => { reject("No Way jose..") }, 2000);

});


myProm
  .then((res) => { console.log(res); })
  .catch((err) => { console.log(err); } );
