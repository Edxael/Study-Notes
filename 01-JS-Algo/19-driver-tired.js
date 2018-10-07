// Location:
// https://www.codewars.com/kata/dont-drive-too-long/javascript

// Driving can be really stressfull and weary activity especially if you are driving a big truck.
// Your task is to write function which return true if driver exceed daily limit,false otherwise.
// The only limitiation is that driver cant drive in total more than 9 hours in 24 hours span.
// Function input:

//There will be only hours from same day,only 3 types of activites "Drive","Rest","Work"
//Limit only applies to "Drive" activity
//We assume that before and after described activities driver was resting.

 // var dailyShedule1 = [ ["7:00-10:30","Drive"],
 //                       ["10:30-10:45","Rest"],
 //                       ["10:45-11:45","Drive"],
 //                       ["11:45-12:15","Rest"],
 //                       ["12:15-16:45","Drive"],
 //                       ["16:45-20:15","Work"]
 //                                     ];
           //-> should return false,9 hours of driving in total.

 console.log("Hello Driver");


 function shouldIBeTired(dailyShedule){

   let hrs = 0
   let min = 0
   let thrs = 0
   let temp = 0
   let tarr = []

  let farr = dailyShedule.filter((x) => { return x[1] === "Drive" }).map((a) => { return a[0] })
                        .map((z) => { return z.split("-") })
                        .forEach((w) => {
                           let starr = w[0].split(":").map((j) => { return parseInt(j) })
                           let enarr = w[1].split(":").map((j) => { return parseInt(j) })

                           console.log( starr )
                           console.log(enarr)
                           console.log("  ");

                           hrs += ((24 - starr[0]) - (24 - enarr[0]))
                           // if(starr[1] === enarr[1]){ min += 0 }
                           if(starr[1] < enarr[1]){ min += (enarr[1] - starr[1]) }
                           if(starr[1] > enarr[1]){ min -= (starr[1] - enarr[1]) }


                        })

    if(min > 60){
      thrs = parseInt((min / 60).toFixed(0))
      temp = min % 60
      hrs += thrs
      min = temp
    }

    if(min < 0){
      min = Math.abs(min)
      if(min > 60){
        thrs = parseInt((min / 60).toFixed(0))
        temp = min % 60
        hrs -= thrs
        min = temp
      }else {
        hrs -= 1
        min = 60 - min
      }
     }

    console.log("Hrs: ", hrs)
    console.log("Min: ", min)

    if((hrs > 9) || ( hrs === 9 && min < 0 )){
      return true
    }else {
      return false
    }

 }

 // console.log( shouldIBeTired( [["5:15-10:15","Work"],  ["10:15-19:20","Drive"]] ) );
 console.log( shouldIBeTired( [["8:00-9:00","Drive"], ["9:00-10","Work"]] ) );
