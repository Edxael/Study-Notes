import React, { Component } from 'react';
import { HashRouter, Route, Link, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../REDUX/01-Store';

import '../CSS/styles.css';
import Home from './01-Home';
import List from './02-List';
import About from './03-About';
import PNF from './99-PNF'

class Main extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <div className="MainContainer">

            <div className="menu1">
              <Link className="menuButton" to="/">Home</Link>
              <Link className="menuButton" to="/2">List</Link>
              <Link className="menuButton" to="/3">About</Link>
            </div>

            <hr />

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/2" component={List} />
              <Route path="/3" component={About} />
              <Route component={PNF} />
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
