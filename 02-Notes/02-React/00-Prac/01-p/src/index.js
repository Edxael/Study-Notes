import React from 'react';
import ReactDOM from 'react-dom';
import Co1 from './01-comp.jsx';

const Main = () => {
  let myStyle = {
    margin: "25px;",
    border: "2px solid black"
  }
  return(
    <div>
      <h1>Main Component</h1>
      <Co1/>
    </div>
  );
}

ReactDOM.render(<Main/>, document.getElementById('root'));
