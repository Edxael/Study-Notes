
function ìsZeroBalanced(n){
  if(n.length == 0){return true}
  const asum = (pv, cv) => pv + cv;
  return (n.reduce(asum) == 0) ? true : false ;
}







if( str.match( /[a-zA-Z]/ ) ){
  console.log("es Vocal");
}else {
  console.log("es consonante");
}
