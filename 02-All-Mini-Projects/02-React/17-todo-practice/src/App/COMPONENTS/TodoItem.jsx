import React, { Component } from 'react';
import { FunToUpdateTask } from '../REDUX/03-Actions';

import { connect } from 'react-redux';
import { store } from '../REDUX/01-Store';

class TDItem extends Component{
  constructor(props){
    super(props)
    this.state = {
      isDone: this.props.data.done,
      itemIndex: this.props.data.idx
    }
  }
  handleCheck = () => {
    this.setState({ isDone: !this.state.isDone }, () => {
      store.dispatch( FunToUpdateTask('--', this.state.isDone, this.props.idx) )
    })
    
  }
  render(){
    return(
      <div className="singleTodo">
        <p className={(this.state.isDone) ? 'markedText' : ''} >Task: {this.props.data.text}</p>
        <input
            type="checkbox"
            checked={this.state.isDone}
            onChange={this.handleCheck} 
        />
      </div>
    )
  }
}

export default connect(null)(TDItem);