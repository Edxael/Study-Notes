import React from 'react';
import { connect } from 'react-redux';
import { store } from '../02-Redux/03-Store';
import { addOneToCount } from '../02-Redux/01-Actions';

class AddOneBtn extends React.Component{

    exeAddOneToCount = () => {
        console.log("Execute AddOneToCount")
        store.dispatch(addOneToCount())
    }

    render(){
        return(
            <div>
                <button onClick={ this.exeAddOneToCount } >Add One.</button>
            </div>
        )
    }
}

export default connect(null)(AddOneBtn);