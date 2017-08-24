import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';


let Icon1 = () => {
  let icoSty = {
    marginRight: "17px"
  }

  return(
    <Glyphicon style={icoSty} glyph="glyphicon glyphicon-knight"/>
  );
}


let Icon2 = () => {
  let icoSty = {
    marginRight: "17px"
  }

  return(
    <Glyphicon style={icoSty} glyph="glyphicon glyphicon-cd"/>
  );
}


let Icon3 = () => {
  let icoSty = {
    marginRight: "17px"
  }

  return(
    <Glyphicon style={icoSty} glyph="glyphicon glyphicon-print"/>
  );
}





let IconsBar = () => {
  let myStyle = {
    padding: "10px",
    border: "2px solid black",
    width: "400px",
    backgroundColor: "rgb(88, 127, 213)"
  }

  return(

      <div style={myStyle}>
        <Icon1/>
        <Icon2/>
        <Icon3/>
      </div>

  );
}


export default IconsBar;
