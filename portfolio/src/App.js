import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import About from './components/About';

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
              component={About} />
            </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
