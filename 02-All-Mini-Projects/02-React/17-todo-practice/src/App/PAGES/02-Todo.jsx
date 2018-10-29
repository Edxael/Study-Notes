import React, { Component } from 'react';
import SingleToDo from '../COMPONENTS/TodoItem';

import { connect } from 'react-redux';
import { store } from '../REDUX/01-Store';

class Todo extends Component {
  constructor(props){
    super(props)
    this.state = {
      alltasks: []
    }
  }
  componentWillMount() {
    let storeData = store.getState().tasks
    console.log('StoreData: ', storeData)
    this.setState({ alltasks: storeData })
  }
  render() {

    return (
      <div>
        <h3>List of Tasks To-Do</h3>

        {
          this.state.alltasks.map((x, i) => { return(
            <SingleToDo  key={i} data={x} idx={i} />
          ) })
        }

      </div>
    )
  }
}

export default connect(null)(Todo);