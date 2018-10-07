// ===[ BackEnd: Provider ]=================================
const kitchenJJ = (order) => {
    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {

            const randomNumber1n2 = Math.floor(Math.random() * (2 - 1 + 1)) + 1;

            if(randomNumber1n2 === 1){
                resolve('The Ham Sanwich')
            }else{
                reject('Sorry out of materials')
            }

        }, 1000)
    })

    return myPromise
}


// ===[ FrontEnd: Consumer ]====================================
console.log("")
console.log("Front-End  ")
console.log("")


const myFunToRequestSandwich = async () => {
    try {
        const whaIgotfromJJ = await kitchenJJ('Ham')
        console.log("Inside of the bag: ", whaIgotfromJJ)
    
    } catch (error) {
        // console.error(error)
        console.log(error)
    }
}


myFunToRequestSandwich()








