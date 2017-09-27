import React from 'react';
import '../01-css/style.css';

let Evangelion = () => {

  let myStyle ={
    backgroundColor: "black",
    color: "white",
    textAlign: "center",
    padding: "5px"
  }

  return(
    <div className="eva">
      <p>this is a Stateless Component</p>
      <h3 style={ myStyle } >Evangelion</h3>
      <ul>
        <li>Rey Ayanami</li>
        <li>Shinji Ikari</li>
        <li>Asuka Langley Soryu</li>
        <li>Mari Makinami</li>
      </ul>
    </div>
  );
}

export default Evangelion;
