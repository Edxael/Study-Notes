import React from 'react';
import ReacDOM from 'react-dom';

import Header1 from './02-comps/01-ClassComp.jsx';
import Evangelion from './02-comps/02-StatelessComp.jsx';


class Gather extends React.Component{
  render(){
    return(
      <div className="gatherDiv">
        <h3>This is the gather component in: index.js</h3>
        <Header1 />
        <Evangelion/>
      </div>
    )
  }
}

ReacDOM.render(<Gather />, document.getElementById('root'));
