import React from 'react';



class Senators extends React.Component {

  onButtonClick() {
    let data = require('./data/senators.json');

    console.log("hello 2");
    console.log(data);

    const dem = data.filter((senator) => {
      return senator.party === "Democrat";
    })
    console.log(dem);

    const rep = data.filter((senator) => {
      return senator.party === "Republican";
    })
    console.log(rep);

    const rnames = rep.map((x) => { return x.person.name })
    rnames.map((y) => { console.log(y); })

    

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
