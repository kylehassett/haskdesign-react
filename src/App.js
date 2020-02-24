import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.sass';

function App() {
  return (
    <Router>

      <Switch>
        <Route path={"/home"}>
          <Home />
        </Route>
        <Route path={"/about"}>
          <About />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

function About() {
  return (
    <div className="App">
      <p>About</p>
    </div>
  );
}
