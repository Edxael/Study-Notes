import React, { Component, ReactNode } from 'react';

type Props = {
  children: ReactNode
}

class Card extends Component{
  render(){
    return (
      <div className="theCard">
        <h3>Card Title</h3>
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}
  
export default Card;