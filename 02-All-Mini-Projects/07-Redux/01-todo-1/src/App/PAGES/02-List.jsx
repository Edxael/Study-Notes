import React from 'react';
import { connect } from 'react-redux';
import { store } from '../REDUX/01-Store'
import { ADDTODO } from '../REDUX/03-Actions'

const mapStateToProps = (state, ownProps) => {
  const { todoList } = state         // <-- Get the todo from the Redux.store
  return { todoList: todoList };     // <-- Passing the data to the props
}

class List extends React.Component{
  constructor(props){
    super(props)
    this.satate = {
      todoList: this.props.todoList, // <-- from the props to the state.
      employees: [],
      knites: []
    }
  }
  
  render(){
    console.log("----------------------------")
    console.log("Local Todo List: ", this.satate.todoList)
    console.log("----------------------------")
    return(
      <div>
        <h4>List Page</h4>
        <p>List of things to do:</p>
      </div>
    )
  }
}



export default connect(mapStateToProps)(List);