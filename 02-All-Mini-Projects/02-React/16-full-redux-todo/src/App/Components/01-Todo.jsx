import React, { Component } from 'react';
import { connect } from 'react-redux';
import { store } from '../Redux/01-Store';
import { changeTDstatus } from '../Redux/03-Actions';

class TodoItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      done: this.props.data.finish,
      task: this.props.data.task,
      // tidx: this.props.idx
    }
  }
  
  updateStatus = () => {
    this.setState({ done: !this.state.done })
    store.dispatch(changeTDstatus(this.props.idx))
  }
  render() {
    return (
      <div className="single-todo">
        <div><strong>Task: </strong>{this.state.task}</div>
        <input
          type="checkbox"
          checked={this.state.done}
          onChange={this.updateStatus}
        />
      </div>
    )
  }
}

export default connect(null)(TodoItem)