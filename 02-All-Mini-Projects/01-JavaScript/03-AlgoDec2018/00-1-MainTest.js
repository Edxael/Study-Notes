console.log("Hjs")


const tripleFun = (num1) => {
  return (num2) => {
    return (num3) => {
      return num1 + num2 + num3
    }
  }
} 


console.log("triple fun: ", tripleFun(10)(20)(30))