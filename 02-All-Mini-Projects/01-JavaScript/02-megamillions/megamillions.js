// Used to select numbers 
console.log("Automatic number selection.")

const genBigNum = () => {
  return Math.floor(Math.random() * (70 - 1 + 1)) + 1;
}

const genSmallNum = () => {
  return Math.floor(Math.random() * (5 - 1 + 1)) + 1;
}


const completeExecution = (times) => {
  for (let x = 1; x <= times; x++) {
    console.log('=============')
    console.log("Set# ", x)
    console.log('')
    console.log("Num1: ", genBigNum())
    console.log("Num2: ", genBigNum())
    console.log("Num3: ", genBigNum())
    console.log("Num4: ", genBigNum())
    console.log("Num5: ", genBigNum())
    console.log("Num6: ", genSmallNum())
    console.log(' ')
  }
  console.log('=============')
}

completeExecution(10)
