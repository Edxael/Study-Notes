import React from 'react';
import { connect } from 'react-redux';
import { addTodoToStore } from '../REDUX/03-Actions';
// import { store } from '../REDUX/01-Store';

const mapStateToProps = (state) => {
  const { todoList } = state;
  return { todoList: todoList }
}

const mapDispatchToProps = (dispatch) => {
  return ({
    addTodoToStore: (text) => { dispatch(addTodoToStore(text)) }
  })
}





class Home extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      taskNumber: this.props.todoList.length,
      userInput: ''
    }
  }

  componentDidUpdate(prevProps) {
    if (  prevProps.todoList.length > this.state.taskNumber) {
      console.log("New Things")
      this.setState({ taskNumber: prevProps.todoList.length })
    }
  }

  componentDidMount(){
    console.log("The Hole Props: ", this.props)
  }


  handleUserInput = (event) => {
    event.preventDefault();
    this.setState({ userInput: event.target.value })
  }

  handleAddTask = () => {
    console.log("Task to add: ", this.state.userInput);
    this.props.addTodoToStore(this.state.userInput) 
    this.setState({ userInput: '' })
  }

  render(){
    return(
      <div>
        <h4>Home Page</h4>
        <div>Tasks to do: {this.state.taskNumber}</div>
        <br/>

        <div>Type new task.</div>
        <input type="text" value={this.state.userInput} onChange={this.handleUserInput} />
        <br/><br/>

        <button onClick={this.handleAddTask} >Add task</button>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);