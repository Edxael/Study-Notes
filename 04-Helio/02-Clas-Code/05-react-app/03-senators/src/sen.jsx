import React from 'react';



class Senators extends React.Component {

  onButtonClick() {
    let data = require('./data/senators.json');

    console.log("hello 2");
    console.log(data);

    const flSen = data
    .filter((senator) => { return senator.state === "FL" && senator.senator_rank  !== "junior" })
    .map((senator) => {
      return  {
        Name: `${senator.person.firstname} ${senator.person.lastname}`,
        Party: `${senator.party}`
      }
    })
    .reduce( (acc, cv) => { return cv } , "Senator Not Found")



    console.log(flSen);

    return data;

  }

  render() {
    return(
      <div>
          <p> Senators 1 </p>
          <button onClick={this.onButtonClick}>Show Data</button>



      </div>
    )
  }
}

export default Senators;
