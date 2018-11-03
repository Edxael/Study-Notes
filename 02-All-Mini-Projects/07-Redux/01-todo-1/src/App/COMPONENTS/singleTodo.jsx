import React, { Component } from 'react';
import { store } from '../REDUX/01-Store';
import { updateTaskStatusFun } from '../REDUX/03-Actions';

class SingleTodo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      taskDone: this.props.taskDone
    }
  }
  
  handleCheckChange = () => {
    console.log("Updating CkeckBox")
    this.setState({ taskDone: !this.state.taskDone }, () => {
      store.dispatch(updateTaskStatusFun(this.state.taskDone, this.props.idx))
    })

  }
  render() {
    return (
      <div>
        <span>Task: {this.props.text}</span>
        <span>
          <input
            type="checkbox"
            checked={this.state.taskDone}
            onChange={this.handleCheckChange}
          />
        </span>
      </div>
    )
  }
}


export default SingleTodo;