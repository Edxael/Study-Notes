
// Given an array of historic prices of a stock 
// provide what whas the maximum profit pocible from boy low and sell high
// if max profit is zero you can return zero
// it there were only loses, aka stock onli diclinig in value retunr -1

const maxStock = (arr) => {

  let poiArr = arr.slice(0).sort((a, b) => { return a - b })
  let maxArr = arr.slice(0, arr.indexOf(poiArr[poiArr.length - 1]) + 1)
  let lowArr = arr.slice(arr.indexOf(poiArr[0]))

  let mm = maxArr[maxArr.length - 1]
  let ml = maxArr.sort((a, b) => {return a - b})[0]
  let mp = mm - ml

  let ll = lowArr[0]
  let lm = lowArr.sort((a, b) => { return a - b })[lowArr.length - 1]
  let lp = lm - ll

  if((mm === ml) && (lm === ll) && (mm !== lm)){return -1}

  return (mp >= lp) ? mp : lp
}


// console.log( maxStock([10, 18, 4, 5, 9, 6, 16, 12]) );  // <---- 12
// console.log( maxStock([10, 10, 10, 10]) );
// console.log( maxStock([50, 49, 48, 47, 46, 45]) );
// console.log( maxStock([32, 46, 26, 38, 40, 48, 42]) );



  // console.log("Orig: ", arr);
  // console.log("Poit: ", poiArr);
  // console.log("Max:  ", maxArr);
  // console.log("Low:  ", lowArr);
  //
  // console.log(" ");
  // console.log("mm: ", mm);
  // console.log("ml: ", ml);
  // console.log("mp: ", mp);
  //
  // console.log(" ");
  // console.log("lm: ", lm);
  // console.log("ll: ", ll);
  // console.log("lp: ", lp);
  // console.log(" ");
