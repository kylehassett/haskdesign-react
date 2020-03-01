import { jsx } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.sass';

import Home from './home/Home';
import Header from './function/header/Header';
import Footer from './function/footer/Footer';
import { userInterfaceMode } from '../actions/userInterface';
import { getTheme } from './theme';


function App(props) {
  const appTheme = getTheme(props.userInterfaceMode === userInterfaceMode.DARK_MODE);

  return (
    <Router>
      <ThemeProvider theme={appTheme}>
        <Header />
        <Switch>
          <Route exact path={"/"} component={Home} />
          <Route exact path={"/about"} component={About} />
        </Switch>
        <Footer />
      </ThemeProvider>
    </Router>
  );
}

const mapStateToProps = (state) => {
  return {
    userInterfaceMode: state.userInterface.userInterfaceMode
  };
}

export default connect(mapStateToProps)(App);

function About() {
  return (
    <p>About</p>
  );
}
