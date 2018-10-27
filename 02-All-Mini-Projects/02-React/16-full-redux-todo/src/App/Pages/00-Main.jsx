import React, { Component } from 'react';
import { HashRouter, Route, Link, Switch } from 'react-router-dom';

// Redux things
import { Provider } from 'react-redux';
import { store } from '../Redux/01-Store';

import '../CSS/styles.css';
import Home from './01-Home';
import Todos from './02-Todos'
import About from './03-About';
import PageNF from './99-Uknow';

class Main extends Component {
  render() {
    return (
      <Provider store={store} >
        <HashRouter>
          <div className="MainContainer">

            <div className="menu1">
              <Link className="menuButton" to="/">HOME</Link>
              <Link className="menuButton" to="/2">To Do's</Link>
              <Link className="menuButton" to="/3">About</Link>
            </div>

            <hr />

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/2" component={Todos} />
              <Route path="/3" component={About} />
              <Route component={PageNF} />
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