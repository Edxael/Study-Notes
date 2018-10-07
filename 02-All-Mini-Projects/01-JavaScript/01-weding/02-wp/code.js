// console.log("Hello from code.js");

const records_db = [];


  // Constructor goes here
class RecordTemplate{
  constructor(data1, data2, data3){
    this.name = data1;
    this.invites = data2;
    this.email = data3;
  }
}



const add = () => {
  const data1 = document.getElementById("in-1").value;
  const data2 = document.getElementById("in-2").value;
  const data3 = document.getElementById("in-3").value;

  document.getElementById("in-1").value = "";
  document.getElementById("in-2").value = "";
  document.getElementById("in-3").value = "";

  if(data1 !== ""){
    const record = new RecordTemplate(data1, data2, data3);
    records_db.push(record);
    console.log(records_db);

    document.getElementById("p1").innerHTML = `${data1} your ${data2} invites will be send to ${data3}`;

    setTimeout(() => {
      document.getElementById("p1").innerHTML = "Please provide information required and press RSVP";
    }, 5500);
  }

}
