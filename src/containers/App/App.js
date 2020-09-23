import React from 'react';
import './App.scss';
import Header from '../Header/index.js'
import { Switch, Route } from 'react-router-dom';
import HomePage from '../HomePage';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Root />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/home">
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}
function Root() {
  return (
    <div>
      <h2>Root</h2>
    </div>
  );
}