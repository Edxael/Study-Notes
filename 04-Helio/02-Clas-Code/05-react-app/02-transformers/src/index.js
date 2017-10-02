import React from 'react';
import ReactDOM from 'react-dom';

import Ter from './Mega.jsx';

class Gather extends React.Component {
  render() {
    return(
      <div>

        <h1>This is the main Component</h1>
        <Ter/>

      </div>
    )
  }
}

ReactDOM.render(<Gather />, document.getElementById("root"));
