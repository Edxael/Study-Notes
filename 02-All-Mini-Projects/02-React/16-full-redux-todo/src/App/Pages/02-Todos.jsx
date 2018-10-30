import React, { Component } from 'react';
import SingleTodo from '../Components/01-Todo';
import { removeFromStateDoneTask } from '../Redux/03-Actions';

// Redux things
import { connect } from 'react-redux';
import { store } from '../Redux/01-Store';

const stateReturner = (state) => {
    console.log("The STATE..: ", state)
    return state
}
 
class Todos extends Component{
    constructor(props){
        super(props)
        this.state = {
            taskstd: []
        }
    }
    
    // componentWillMount(){
    componentDidMount(){
        let fullRxStore = store.getState()
        console.log("The store in todos-p: ", fullRxStore)
        this.setState({ taskstd: fullRxStore.todos })
    }

    removeTasksDone(){
        store.dispatch(removeFromStateDoneTask())
        let fullRxStore = store.getState()
        console.log("The store in todos-p: ", fullRxStore)
        this.setState({ taskstd: fullRxStore.todos })
    }

    render(){
        
        return(
            <div>
                <h2>List of Todos - A7</h2>
                <br/><br/>

                {
                    this.state.taskstd.map((x, i) => { return(
                            <SingleTodo key={i} data={x} idx={i} />
                    ) })
                }
                
                <br/>
                <button onClick={this.removeTasksDone} >Remove Tasks Done</button>

            </div>
        )
    }
}

export default connect(stateReturner)(Todos);