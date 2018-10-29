import React, { Component } from 'react';
import { connect } from 'react-redux';
import { store } from '../REDUX/01-Store';
import { AddNewTask } from '../REDUX/03-Actions';

class Home extends Component{
  constructor(props){
    super(props)
    this.state = {
      userInput: ''
    }
  }

  addTasksToStore = () => {
    console.log("New Task: ", this.state.userInput)
    store.dispatch(AddNewTask(this.state.userInput))
  }

  render(){
    return(
      <div>
        <h3>Page to add new Task</h3>
        <br/>

        <input type="text" value={this.state.userInput} onChange={ (e) => { this.setState({ userInput: e.target.value }) } } />
        <br/><br/>

        <button onClick={this.addTasksToStore} >Add NewTask</button>

      </div>
    )
  }
}

export default connect(null)(Home);