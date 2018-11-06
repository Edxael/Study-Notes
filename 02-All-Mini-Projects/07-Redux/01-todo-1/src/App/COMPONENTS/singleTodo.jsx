import React, { Component } from 'react';
// import { store } from '../REDUX/01-Store';
import { connect } from 'react-redux';
import { updateTaskStatusFun } from '../REDUX/03-Actions';

const mapDispatchToProps = (dispatch) => {
  return ({
    updateTaskStatusFun: (status, idx) => { dispatch(updateTaskStatusFun(status, idx)) }
  })
}

class SingleTodo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      taskDone: this.props.taskDone
    }
  }

  handleCheckChange = () => {
    this.setState({ taskDone: !this.state.taskDone }, () => {
      this.props.updateTaskStatusFun(this.state.taskDone, this.props.idx)
    })
  }

  render() {
    return (
      <div className="singleTodo" >
        <span><strong>Task:</strong> {this.props.text}</span>
        <span>
          <input
            type="checkbox"
            checked={this.state.taskDone}
            onChange={this.handleCheckChange}
            className="ckBox"
          />
        </span>
      </div>
    )
  }
}


export default connect(null, mapDispatchToProps)(SingleTodo);