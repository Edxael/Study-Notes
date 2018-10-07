    // File index.js

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

let Upic1 = () => {
  return(
    <img src="https://i.pinimg.com/736x/73/a1/e1/73a1e1ba10112016628dfde50daf812d--korean-idols-korean-men.jpg" alt="Missing Pic"/>
  );
}

let UserName = () => {
  return(
    <h2>Mad Clown</h2>
  );
}


let Like1 = () => {
  return(

  );
}




const MainFrame = () => {
  return(
    <div className="pic1">

      <Upic1/>
      <UserName/>
      <div>
        <div>Like</div>
        <div>Facebook</div>
        <div>Elses</div>
      </div>

    </div>
  );
}

ReactDOM.render(
  <MainFrame/>, document.getElementById("root")
);
