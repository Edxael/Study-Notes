import React from 'react';
import Switch from '@material-ui/core/Switch';
import '../CSS/00-gral-style.css';

import Card from '../COMPONENTS/00-Card';
import MyButton from '../COMPONENTS/01-button';
import MyDescription from '../COMPONENTS/02-Description';


class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            num1: 0,
            currentcommand: true,
        }
    }

    addOne = (command) => {
        console.log('The Command: ', command)

        if (command === true) {
            this.setState({ num1: this.state.num1 + 1 })
        } else if (command === false) {
            this.setState({ num1: this.state.num1 - 1 })
        }
    }


    handleChange = () => {
        console.log("Curr Comm val: ", this.state.checkedB)
        this.setState({ currentcommand: !this.state.currentcommand })
    }

    render() {
        return (
            <div>
                <h4>main component</h4>
                <p>Counter Value: {this.state.num1}</p>
                <hr />

                <Switch
                    checked={this.state.currentcommand}
                    onChange={this.handleChange}
                    value='Add / Substract'
                    color="primary"
                />

                <br />
                <Card>
                    <MyButton executive={this.addOne} command={this.state.currentcommand} />
                    <MyDescription dscr={"Bla bla bla"} />
                </Card>

            </div>
        );
    }
}

export default Main;