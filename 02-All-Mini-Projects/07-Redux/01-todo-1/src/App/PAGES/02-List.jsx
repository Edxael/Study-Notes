import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeDoneTasks } from '../REDUX/03-Actions'
import SingleTodoComp from '../COMPONENTS/singleTodo';


const mapStateToProps = (state, ownProps) => {
  const { todoList } = state         
  return { todoList: todoList }; 
}

const mapDispatchToProps = (dispatch) => {
  return{
    removeDoneTasks: () => { dispatch(removeDoneTasks()) }
  }
}

class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todoList: this.props.todoList,
    }
  }

  componentDidUpdate(prevProps) {
    console.log("PrepvProps: ", prevProps)
    console.log("Loc State: ", this.state)
    if (  prevProps.todoList.length !== this.state.todoList.length) {
      console.log("New Items on task list, Updating the state...")
      // this.setState({ todoList: prevProps.todoList })
    }
  }

 
 
  render() {
    return (
      <div>
        <h2>List of Tasks ToDo</h2>
        {
          this.state.todoList.map((x, idx) => {
            return (
              <SingleTodoComp
                taskDone={x.completed}
                text={x.task}
                idx={idx}
                key={idx}
              />
            )
          })
        }

        <br/>
        <button className="taksBTNs" >Mark all: Done</button>
        <button className="taksBTNs" >Mark all: NOT Done</button>
        <button onClick={ ()  => { this.props.removeDoneTasks() } } className="taksBTNs" >Remove Done Tasks</button>

      </div>
    )
  }
}

List.propTypes = {
  todoList: PropTypes.array
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
