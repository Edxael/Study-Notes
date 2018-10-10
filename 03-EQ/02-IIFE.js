console.log("IFFE:")

// Instructions: 
// 01- What is an "IIFE" 
// 02- Why are they used
// 03- Code an example



// ===[ Solution ]============================
// 01- IIFE stands for: Immediatly Invoked Function Expression  Info: https://developer.mozilla.org/en-US/docs/Glossary/IIFE
// 02- They are use: To presever a private scope withing the function. 
// 03- Code example: 

// Code example 1
let myVar = (() => {
    console.log("Hello from: IIFE")
    return 77
})()

console.log("The value of myVar: ", myVar)


// Code example 2
let myValue = ((num) => {return num * 2})(5)

console.log("myValue: ", myValue)   // 10