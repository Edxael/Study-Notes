import React from 'react'
import { connect } from 'react-redux'
import { addTaskToStoreList } from '../03-reduxFiles/02-Actions'
import { store } from '../03-reduxFiles/01-Store'


class ButtonPlus extends React.Component{
    render(){

        const myFunctionAdd = () => {
            store.dispatch(addTaskToStoreList(this.props.taskToAdd))
            this.props.cleanInput()
        }

        return(
            <div>
                <button onClick={myFunctionAdd} className="controlButton" >Add Task.</button>
            </div>
        )
    }
}

export default connect(null)(ButtonPlus)
