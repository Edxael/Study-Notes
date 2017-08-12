console.log("Hello form code.js");

const guest_db = [];

class InvitesConstructor {
  constructor(data1, data2, data3) {
    this.name = data1;
    this.invites = data2;
    this.email = data3;
  }
}



const add = () => {
  const data1 = document.getElementById('in-1').value;
  const data2 = document.getElementById('in-2').value;
  const data3 = document.getElementById('in-3').value;

  document.getElementById('in-1').value = "";
  document.getElementById('in-2').value = "";
  document.getElementById('in-3').value = "";

  if(data1 !== ""){
    const record = new InvitesConstructor(data1, data2, data3);
    guest_db.push(record);
    console.log(guest_db);

    document.getElementById('p1').innerHTML = `${data1} you ${data2} invites will be send to the emai: ${data3}`;

    setTimeout(() => {
      document.getElementById('p1').innerHTML = "Provide information above then click RSVP";
    }, 5000);
  }
}
