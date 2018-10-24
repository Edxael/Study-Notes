import React from 'react';
import { store } from '../02-Redux/03-Store';
import { connect } from 'react-redux';

import AddOneBtn from '../04-Components/01-AddOneButton'

const stateReturner = (state) => {
    console.log("The STATE: ", state)
    return state 
}

class Home extends React.Component{
    render(){

        let reduxData = store.getState();
        console.log(" ")
        console.log("  The ReduxData in Home: ", reduxData)
        console.log(" ")

        return(
            <div>
                <h4>Home Pages</h4>

                <h5>The Counter value: { reduxData.count }</h5>

                <AddOneBtn />
            </div>
        );
    }
}

export default connect(stateReturner)(Home)