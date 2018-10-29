import React, { Component } from 'react';
import { HashRouter, Route, Link, Switch } from 'react-router-dom';

import '../CSS/style.css';

// Redux
import { Provider } from 'react-redux';
import { store } from '../REDUX/01-Store';

import Home from './01-Home';
import Todo from './02-Todo';

class Main extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <div className="MainContainer">

            <div className="menu1">
              <Link className="menuButton" to="/">HOME</Link>
              <Link className="menuButton" to="/2">To-Do's</Link>
            </div>

            <hr />

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/2" component={Todo} />
            </Switch>

            <br />
            <hr />
            <div>By: Edmundo</div>

          </div>
        </HashRouter>
      </Provider>
    )
  }
}

export default Main;