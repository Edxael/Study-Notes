import React from 'react';
import ReactDOM from 'react-dom';
import UserData from './01-UserData.jsx';
import SocialIcons from './02-SocialMed.jsx';


let MainFrame = () => {
  let mainCase = {
    padding: "15px",
    width: "500px",
    border: "2px solid black",
    margin: "20px",
    backgroundColor: "rgb(141, 250, 240)",

    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }

  return(
    <div style={mainCase}>
      <UserData/>
      <br/>
      <SocialIcons/>
    </div>
  );
}


ReactDOM.render(<MainFrame/>, document.getElementById('root'));
