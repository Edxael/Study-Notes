        // Back End - Creation of the promise

        const kitchenJJ = (order) => {
            console.log("Inside of kitchenJJ")
            console.log('what i got as order: ', order)
            console.log(" ")
            console.log(" ")
        
            let bag = []
        
            console.log("How many sandwiches in the order", order.length)
        
            console.log("About to enter forLoop")
            console.log(" ")
            for(let x = 0; x < order.length; x++){
                console.log("On iteration: ", x)
                console.log("This will be a:", order[x], "Sandwich")
        
                let currentSanwich = `${order[x]} Sandwich` 
                bag.push(currentSanwich)
                
            }
        
            return bag
        }
        
        
        let myrequest = ['chiken', 'beef', 'ham', 'hamm', 'veggie']
        
        let mySandwich = kitchenJJ(myrequest)
        
        
        console.log(" ")
        console.log(" ==> What was inside of the bag")
        console.log(mySandwich)