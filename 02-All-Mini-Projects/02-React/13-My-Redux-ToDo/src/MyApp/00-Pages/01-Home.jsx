import React from 'react'
import { store } from '../03-reduxFiles/01-Store'
import { connect } from 'react-redux'

import ButtonP1 from '../04-components/01-btn-plus'
import ButtonM1 from '../04-components/02-btn-munus'
import ButtonR1 from '../04-components/03-btn-reset'
import ListItemComp from '../04-components/04-ListItemComp'


const stateReturner = (state) => {
    console.log("The STATE: ", state)
    return state
}


class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = { taskToAdd: '', fullList: [] }
    }

    componentWillMount() {
        let allData = store.getState()
        this.setState({ fullList: allData.taskslist })
    }

    cleanInput = () => {
        this.setState({ taskToAdd: '' })
    }

    render() {

        // let reduxData = store.getState()

        return (
            <div>
                <br />

                <input type="text" value={this.state.taskToAdd} onChange={(e) => { this.setState({ taskToAdd: e.target.value }) }} />

                <div className="buttonsContainer" >
                    <ButtonP1 taskToAdd={this.state.taskToAdd} cleanInput={this.cleanInput} />
                    <ButtonM1 />
                    <ButtonR1 />
                </div>

                <h3>Tasks:</h3>

                <hr className="HomerHR1" />

                {this.state.fullList.map((x, idx) => {
                    return (
                        <ListItemComp key={idx} idx={idx} text={x.name} completed={x.completed} />)
                })}

                <hr className="HomerHR1" />

            </div>
        )
    }
}

export default connect(stateReturner)(Home)
