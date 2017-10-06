console.log("Hello Map");

let data = [1, 2, 3, 4, 5, 6];
console.log(data);

data = data.map((num) => { return num * 2 }).map((num) => { return num + 1 }).filter((num) => { return num % 3 == 0 });

console.log(data);

const siblings = []
