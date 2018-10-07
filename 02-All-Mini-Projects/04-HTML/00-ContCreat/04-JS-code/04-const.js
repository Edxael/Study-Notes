
console.log("code.js 2");

const reservations_db = [];




class RecordConstructor {
  constructor(data1, data2, data3) {
    this.name = data1;
    this.country = data2;
    this.song = data3;
  }
}




const addRecord = () => {

  const data1 = document.getElementById("in-1").value;
  const data2 = document.getElementById("in-2").value;
  const data3 = document.getElementById("in-3").value;

  document.getElementById("in-1").value = "";
  document.getElementById("in-2").value = "";
  document.getElementById("in-3").value = "";

  if(data1 !== ""){

    const record = new RecordConstructor(data1, data2, data3);
    reservations_db.push(record);
    console.log(reservations_db);

    document.getElementById("p1").innerHTML = `Singer Name: ${data1},  ---  Country: ${data2},  ---  Favorite song: ${data3}.`;

    setTimeout(() => {
      document.getElementById("p1").innerHTML = "Please provide Singer infromation and Click button";
    },4000);
  }
}
