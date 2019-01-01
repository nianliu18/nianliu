import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './App';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';

export default (
  <Route path="/" component={App}>
    <Route exact path="/" component={About} />
    <Route path="experience" component={Experience}/>
    <Route path="projects" component={Projects}/>
  </Route>
);
