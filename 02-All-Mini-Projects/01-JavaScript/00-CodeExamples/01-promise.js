
let correctCredentials = false


let loginResponse = new Promise( (resolve, reject) => {
     setTimeout(() => {
        console.log("Execution of code")

        if(correctCredentials){
            return resolve( "Pass" ) 
        }else{
            return reject( "Fail" )
        }
     }, 2500)
  })
  


console.log("The promise status: ", loginResponse)
console.log(" ")


loginResponse.then((apple) => {
    console.log("The res from Server: ", apple)
}).catch((err) => {
    console.log("The error form pormise: ", err)
})

