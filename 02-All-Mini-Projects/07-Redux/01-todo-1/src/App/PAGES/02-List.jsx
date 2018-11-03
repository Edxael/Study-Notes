import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SingleTodoComp from '../COMPONENTS/singleTodo';
import { store } from '../REDUX/01-Store'



class List extends React.Component {
  constructor(props) {
    super(props)
    this.satate = {
      todoList: this.props.todoList, // <-- from the props to the state.
    }
  }

  exe2 = () => {
    this.setState({ todoList: this.props.todoList })
  }
 
  render() {
    console.log("----------------------------")
    console.log("Local Todo List: ", this.satate.todoList)
    console.log("----------------------------")
    store.subscribe(this.exe2)
    return (
      <div>
        <h4>List Page</h4>
        {
          this.satate.todoList.map((x, idx) => {
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
      </div>
    )
  }
}

List.propTypes = {
  todoList: PropTypes.array
}

const mapStateToProps = (state, ownProps) => {
  const { todoList } = state         // <-- Get the todo from the Redux.store
  return { todoList: todoList };     // <-- Passing the data to the props
}

export default connect(mapStateToProps)(List);
