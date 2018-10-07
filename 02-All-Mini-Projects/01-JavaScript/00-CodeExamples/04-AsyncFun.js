// ===[ BackEnd: Provider ]=================================
const kitchenJJ = (order) => {
    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {

            resolve('The Ham Sanwich')

        }, 1000)
    })

    return myPromise
}


// ===[ FrontEnd: Consumer ]====================================
console.log("")
console.log("Front-End  ")
console.log("")


const myFunToRequestSandwich = async () => {
    const whaIgotfromJJ = await kitchenJJ('Ham')

    console.log("Inside of the bag: ", whaIgotfromJJ)
}


myFunToRequestSandwich()

















// whaIgotfromJJ
//     .then((bag) => {
//         console.log('What I got inside of the bag: ', bag)
//     })
//     .catch((err) => {
//         console.log("JJ says: ", err)
//     })




// const makingSanwichReques = async (mys) => {

//     const whaIgotfromJJ = await kitchenJJ(mys)
//     console.log("The Result: ", whaIgotfromJJ)
// }


// let myRequest = 'Ham'
// makingSanwichReques(myRequest)