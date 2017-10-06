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



  const arr = Object.entries(str.split("").reduce(arrToObj, {}));

  console.log(arr);


  arr2 = arr.filter(dele);
  console.log(arr2);

  arr2 = arr2.reduce( gather , []).split("");
  console.log(arr2);
}


const str = '11pinguin';
console.log( remember(str) );




// function remember(str) {
//   const arrToObj = (acc, cv) => {
//     acc[cv] = (acc[cv] + 1) || 1;
//     return acc;
//   }
//
//   const dele = (suar) => {
//     return suar[1] > 1;
//   }
//
//   const gather = (acc, cv) => {
//     return acc + (cv[0]);
//   }
//
//   return (Object.entries(str.split("").reduce(arrToObj, {}))).filter(dele).reduce( gather , []).split("");
// }
