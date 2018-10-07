import React from 'react';
import upic1 from './IMG/01-mc.png';


let UserPicture = () => {
  let style1 = {
    width: "200px",
    height: "280px"
  }

  return(
    <img style={style1} src={upic1} alt="y la foto??" />
  );
}


let UserText = () => {
  let style2 = {
    color: "blue",
    marginLeft: "10px"
  }

  return(
    <h2 style={style2}>Mad Clown</h2>
  );
}


let UserDataMain = () => {
  let style3 = {
    border: "2px solid black",
    paddingTop: "15px",
    textAlign: "center",
    backgroundColor: "rgb(181, 130, 255)",
    width: "400px"
  }

  return(
    <div style={style3}>
      <UserPicture/>
      <UserText/>
    </div>
  );
}


export default UserDataMain;
