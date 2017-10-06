function remember(str) {
  const arrToObj = (acc, cv) => {
    acc[cv] = (acc[cv] + 1) || 1;
    return acc;
  }

  const dele = (suar) => {
    return suar[1] > 1;
  }

  const gather = (acc, cv) => {
    return acc + (cv[0]);
  }


  let o2a = []



  let arr = str.split("").reduce(arrToObj, {});
  console.log("Pa Trans: ", arr);

  // let arr99 = arr.reduce( obj2arr , []);

  // let arr4 = Object.entries(arr);
  // console.log(" \nDespues: ", arr4);


  for(var key in arr){
    o2a.push([key, arr[key]]);
  }

  console.log(o2a);




  arr2 = o2a.filter(dele);
  console.log(arr2);

  arr2 = arr2.reduce( gather , []).split("");
  console.log(arr2);
  return arr2;
}


const str = 'limbojackassin the garden';
console.log( remember(str) );
