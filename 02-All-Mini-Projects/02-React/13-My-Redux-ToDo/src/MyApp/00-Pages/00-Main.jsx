import React from 'react'
import '../02-css/style.css'
import { HashRouter, Route, Switch } from 'react-router-dom'

// Redux things
import { Provider } from 'react-redux'
import { store } from '../03-reduxFiles/01-Store'

// Importing Pages
import HomePage from './01-Home'
import DefaultNoFound from './99-DefaultNoFound'


class Main extends React.Component {
    render() {
        return (
            <Provider store={store} >
                <HashRouter>
                    <div className="mainContainer">

                        <div className="menuContainer">
                            <h1>My Redux ToDo App.</h1>
                        </div>

                        <hr />

                        <div className="switchContainer" >
                            <Switch>
                                <Route exact path="/" component={HomePage} />
                                <Route component={DefaultNoFound} />
                            </Switch>
                        </div>

                        <hr />

                        <div className="footerContainer">
                            <div>By: Edmundo Rubio</div>
                        </div>

                    </div>
                </HashRouter>
            </Provider>
        )
    }
}

export default Main 