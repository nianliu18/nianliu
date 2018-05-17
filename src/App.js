import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';

class App extends Component {
  render() {
    const route = window.origin
    console.log(route, 'this is your route')
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
              <Route path="/projects"
              render={props => (<Projects/>)}/>
              <Route path="/*"
              render={props=> (<About/>)} />
            </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
