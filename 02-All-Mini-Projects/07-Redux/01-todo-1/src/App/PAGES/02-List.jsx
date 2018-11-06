import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SingleTodoComp from '../COMPONENTS/singleTodo';


const mapStateToProps = (state, ownProps) => {
  const { todoList } = state         
  return { todoList: todoList }; 
}

class List extends React.Component {
  constructor(props) {
    super(props)
    this.satate = {
      todoList: this.props.todoList,
    }
  }
 
  render() {
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

export default connect(mapStateToProps)(List);
