import React from 'react';

class ListItemComp extends React.Component {
    constructor(props) {
        super(props)
        this.state = { completed: this.props.completed }
    }

    handleCheck = () => {
        this.setState({ completed: !this.state.completed })
    }

    render() {
        console.log(this.props.text, this.state.completed)
        return (
            <div className="listItemContainer" >
                <div>--> {this.props.text}</div>
                <input
                    type="checkbox"
                    checked={this.state.completed}
                    onChange={this.handleCheck}
                />
            </div>
        )
    }
}

export default ListItemComp;
