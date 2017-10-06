function group(arr){
  console.log(arr);
  let arr1 = arr.sort((a, b) => { return a - b }).reverse();
  console.log(arr1);
  let arr2 =[['d']];

  arr1 = arr1.map((c, i, a) => {

    if(c == arr2[arr2.length -1][0]){
      arr2[arr2.length -1].push(c);
    }else{
      arr2.push([c]);
    }

  })

  arr2.shift();
  arr2 = arr2.sort((a, b) => { return b.length - a.length })

  return arr2;

}





// const n = [3, 2, 6, 2, 1, 3];
const n = [7,0,1,0,1,2,7,0,2,7,3,2,12,77,15,12,77,15];
// const n = [1, 2, 3, 4];
// const n = [1];
console.log(group(n));

// location of the CIA
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

// const arr = n.filter((num) => { return num % 2 != 0 });
// console.log(arr);
