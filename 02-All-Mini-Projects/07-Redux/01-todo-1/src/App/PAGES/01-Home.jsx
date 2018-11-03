import React from 'react';
import { connect } from 'react-redux';
import { addTodoToStore } from '../REDUX/03-Actions';
import { store } from '../REDUX/01-Store';

const mapStateToProps = (state) => {
  const { todoList } = state;
  return { todoList: todoList }
}

class Home extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      taskNumber: this.props.todoList.length,
      userInput: ''
    }
  }


  exe1 = () => {
    console.log("Updating....")
    this.setState({ taskNumber: this.props.todoList.length })
  }

  handleUserInput = (event) => {
    event.preventDefault();
    this.setState({ userInput: event.target.value })
  }

  handleAddTask = () => {
    console.log("Task to add: ", this.state.userInput);
    store.dispatch(addTodoToStore(this.state.userInput))
    this.setState({ userInput: '' })
  }

  render(){
    
    store.subscribe(this.exe1)
    return(
      <div>
        <h4>Home Page</h4>
        <div>Tasks to do..: {this.state.taskNumber}</div>
        <br/>

        <div>Type new task.</div>
        <input type="text" value={this.state.userInput} onChange={this.handleUserInput} />
        <br/><br/>

        <button onClick={this.handleAddTask} >Add task</button>
      </div>
    )
  }
}

export default connect(mapStateToProps)(Home);