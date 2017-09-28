import React from 'react';
import ReactDOM from 'react-dom';

import Com1 from './01-comps/01-comp.jsx';


class Gather extends React.Component{
  render(){
    return(
      <div className="gatherDiv">
        <h3>This is the gather component in: index.js</h3>
        <Com1 />
      </div>
    )
  }
}

ReactDOM.render(<Gather />, document.getElementById('root'));
