import React from 'react';
import ReactDOM from 'react-dom';
import DannyWay from './comps/DannyWay.jsx';



class GatherComp extends React.Component {
  render() {
    return(
      <div>
        <h3>Senators by Danny:</h3>
        <DannyWay />
      </div>
    )
  }
}

ReactDOM.render(<GatherComp />, document.getElementById('root'));
