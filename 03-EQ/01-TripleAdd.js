console.log("Triple Add Function:")
// Instructions: 
// Create the function that when call:
// tripleAdd(10)(20)(30)  // 60
// Returns the sum of all the values provided 




const tripleAdd = (num1) => {
    return (num2) => {
        return (num3) => {
            return num1 + num2 + num3
        }
    }
}




let answer =  tripleAdd(10)(20)(30)
console.log("The answer: ", answer)  // 60