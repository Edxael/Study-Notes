// Location: https://www.codewars.com/kata/weight-for-weight/train/javascript
// My friend John and I are members of the "Fat to Fit Club (FFC)". John is worried because each month a list with the weights of members is published and each month he is the last on the list which means he is the heaviest.
//
// I am the one who establishes the list so I told him: "Don't worry any more, I will modify the order of the list". It was decided to attribute a "weight" to numbers. The weight of a number will be from now on the sum of its digits.
//
// For example 99 will have "weight" 18, 100 will have "weight" 1 so in the list 100 will come before 99. Given a string with the weights of FFC members in normal order can you give this string ordered by "weights" of these numbers?
//
// Example:
//
// "56 65 74 100 99 68 86 180 90" ordered by numbers weights becomes: "100 180 90 56 65 74 68 86 99"
//
// When two numbers have the same "weight", let us class them as if they were strings and not numbers: 100 is before 180 because its "weight" (1) is less than the one of 180 (9) and 180 is before 90 since, having the same "weight" (9) it comes before as a string.
//
// All numbers in the list are positive numbers and the list can be empty.

// --------------------------------------------------------------------------------------
function orderWeight(strng) {
    console.log(strng);
    console.log('1 2 200 4 4 6 6 7 7 18 27 72 81 9 91 425 31064 7920 67407 96488 34608557 71899703')
    return strng.split(" ")
                // .map((x) => { return [x, x.split("").reduce((pv, cv) => { return pv += parseInt(cv) }, 0), parseInt(x)] })
                .map((x) => { return [x, x.split("").reduce((pv, cv) => { return pv += parseInt(cv) }, 0)] })
                .sort((a, b) => { return a[0][0] - b[0][0] })
                .sort((a, b) => { return a[0] - b[0] })
                .sort((a, b) => { return a[1] - b[1] })
                .map((x) => { return x[0] })
                .join(" ")

}


console.log( orderWeight("71899703 200 6 91 425 4 67407 7 96488 6 4 2 7 31064 9 7920 1 34608557 27 72 18 81") )
