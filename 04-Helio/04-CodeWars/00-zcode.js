function ìsZeroBalanced(n){
  if(n.length == 0){return false}

  if(n.reduce((pv, cv) => pv + cv) == 0){
    console.log(n);
    n = n.filter((x) => x != 0 ).map((n) => Math.abs(n)).sort((a, b) => a-b);
    console.log(n);

    for(y = 0; y < n.length; y += 2){
      if(n[y] != n[y + 1]){ return false }
    }

    return true;

  }else {
    return false;
  }
}


const n = [7,0,1,0,-1,2,-7,0-2,-5,3,2];
console.log(ìsZeroBalanced(n));