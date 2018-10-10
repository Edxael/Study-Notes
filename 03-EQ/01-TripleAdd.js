console.log("Triple Add Function: AKA: Curryng.")
// Instructions: 
// Create the function that when call:
// tripleAdd(10)(20)(30)  // 60
// Returns the sum of all the values provided 
// .
// // More info: https://hackernoon.com/currying-in-js-d9ddc64f162e


// ===[ Solution ]============================

const tripleAdd = (num1) => {
    return (num2) => {
        return (num3) => {
            return num1 + num2 + num3
        }
    }
}




let answer =  tripleAdd(10)(20)(30)
console.log("The answer: ", answer)  // 60