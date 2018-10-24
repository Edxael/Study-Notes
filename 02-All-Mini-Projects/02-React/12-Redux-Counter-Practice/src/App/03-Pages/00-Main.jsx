import React from 'react';
import { HashRouter, Route, Link, Switch } from 'react-router-dom';

// Redux Things
import { Provider } from 'react-redux';
import { store } from '../02-Redux/03-Store'

import '../01-Style/00-General.css'
import Home from './01-Home'
import UserInput from './02-UserInput'
import Display from './03-Display'

class Main extends React.Component {
    render() {
        return (
            <Provider store={store} >
                <HashRouter>
                    <div className="MainContainer">

                        <div className="menu1">
                            <Link className="menuButton" to="/">HOME</Link>
                            <Link className="menuButton" to="/2">UserInput</Link>
                            <Link className="menuButton" to="/3">Display</Link>
                        </div>

                        <hr />

                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/2" component={UserInput} />
                            <Route exact path="/3" component={Display} />
                        </Switch>

                        <br />
                        <hr />
                        <div>By: Edmundo</div>

                    </div>
                </HashRouter>
            </Provider>
        );
    }
}

export default Main;

