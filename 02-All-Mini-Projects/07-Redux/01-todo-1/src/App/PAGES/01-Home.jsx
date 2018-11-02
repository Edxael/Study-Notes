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

  componentWillReceiveProps(nextProps){
    console.log("Inside of componentWillReceiveProps")
    console.log("")
    console.log("----------------------------")
    console.log("NextProps: ",nextProps )
    console.log("")
    console.log("----------------------------")
    console.log("this.props: ", this.props)
    console.log("----------------------------")
    if(nextProps.todoList !== this.props.todoList){
      //Perform some operation
      console.log("No Iguales..")
      this.setState({taskNumber: nextProps.todoList.length });
      this.classMethod();
    }
  }

  handleUserInput = (event) => {
    event.preventDefault();
    // console.log("The event: ", event.target.values)
    this.setState({ userInput: event.target.value })
  }

  handleAddTask = () => {
    console.log("Task to add: ", this.state.userInput);
    store.dispatch(addTodoToStore(this.state.userInput))
    this.setState({ userInput: '' })
    // this.componentWillReceiveProps()
  }

  render(){
    return(
      <div>
        <h4>Home Page</h4>
        <div>Tasks to do:.. {this.state.taskNumber}</div>
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