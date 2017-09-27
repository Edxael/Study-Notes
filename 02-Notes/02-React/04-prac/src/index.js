import React, { Component } from 'react';
import ReacDOM from 'react-dom';
import Comp_01 from './comps/01-comp.jsx';


class Gather extends Component {
  render() {
    return(
      <div className="gatherDiv">
        <h1>Main Div</h1>
        <Comp_01 />
      </div>
    )
  }
}


ReacDOM.render(<Gather />, document.getElementById('root'));
