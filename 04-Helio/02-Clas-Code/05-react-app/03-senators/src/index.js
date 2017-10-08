import React from 'react';
import ReactDOM from 'react-dom';
import Senators from './sen.jsx'

// import Senators from './data/senators.json';


class Gather extends React.Component {

  render() {
    return(
      <div>
        <p>Main Comp </p>
        <Senators />
      </div>
    )
  }
}

ReactDOM.render(<Gather />, document.getElementById("root"));
