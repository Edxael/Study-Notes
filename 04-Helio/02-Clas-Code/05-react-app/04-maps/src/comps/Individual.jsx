import React from 'react';

class Individual extends React.Component {
  render() {
    return(
      <div>
        <div><strong>Name: </strong>{this.props.info.name}</div>
        <div><strong>Satate: </strong>{this.props.info.state}</div>
        <div><strong>B-Day: </strong>{this.props.info.bday}</div>
        <br/><br/>
    </div>
    )
  }
}

export default Individual;
