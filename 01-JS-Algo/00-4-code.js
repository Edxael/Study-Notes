

// ===[ BK.E. ]=============================
const myFakeBE = () => {
    const myPromise = new Promise((resolve, reject) => {
        let milisecToWait = 1
        setTimeout(() => {
            console.log(`  ===> [B.E.] After ${milisecToWait} miliseconds`)
            resolve({ message: 'succes' })
        }, milisecToWait)
    })

    return myPromise
}


// ===[ FR.E. ]=============================
console.log("My Code before call to BK.E...")

myFakeBE()
    .then((resp) => { console.log("The respose from the B.E.", resp) })
    .catch((err) => { console.log("The Error from B.E. is: ", err) })


    console.log("After: call to BK.E......")


// -------------------------------------------------------
    let loop1 = (2 * 1000000 * 1000)
    console.log(" ")
    console.log(`Before 1st FL with: ${loop1} loops`)
    for(let x = 0; x < loop1; x++){

    }
    console.log("After: 1st For Loop ")


// -------------------------------------------------------
    let loop2 = ( 10 )
    console.log(" ")
    console.log(`Before 1st FL with: ${loop2} loops`)
    for(let x = 0; x < loop2; x++){

    }
    console.log("After: 1st For Loop ")

    console.log("")
    console.log("")