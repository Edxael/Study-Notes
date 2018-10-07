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
console.log("FE  ")
console.log("")


let myRequest = 'Ham'
const whaIgotfromJJ = kitchenJJ(myRequest)

whaIgotfromJJ
    .then((bag) => {
        console.log('What I got inside of the bag: ', bag)
    })
    .catch((err) => {
        console.log("JJ says: ", err)
    })





// resolve('The Ham Sanwich')
//         reject('Sorry out of materials')







// const randomNumber1n2 = Math.floor(Math.random() * (2 - 1 + 1)) + 1

// console.log(randomNumber1n2)