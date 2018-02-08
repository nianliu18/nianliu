import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import About from './components/About';
import Experience from './components/Experience';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="nav-container">
            <NavBar />
          </div>
            <Switch>
              <Route path="/" exact
              render={props => (<About/>)} />
              <Route path="/experience"
              render={props => (<Experience/>)} />
            </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
