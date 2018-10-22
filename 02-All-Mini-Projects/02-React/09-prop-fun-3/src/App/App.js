import React, { Component } from 'react';
// import logo from './img/logo.svg';
import './css/App.css';
import MyHeader from './componets/Header.jsx'
import MyMiddle from './componets/Middle'
import MyFooter from './componets/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        
          <MyHeader />
          <hr />

          <MyMiddle />
          <hr />

          <MyFooter />
          <hr />
          
      </div>
    );
  }
}

export default App;
