/** @jsx jsx */
import { jsx } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Home } from './home';
import { Header } from './common/header';
import { Footer } from './common/footer';
import { userInterfaceMode } from '../actions/userInterface';
import { Resume } from './resume';
import { getAppStyles } from './styles';
import { getTheme } from './theme';
import { Work } from './work';


function App(props) {
  const appTheme = getTheme(props.userInterfaceMode === userInterfaceMode.DARK_MODE);

  return (
    <Router>
      <ThemeProvider theme={appTheme}>
        <div className="d-flex flex-column flex-fill" css={getAppStyles}>
          <Header />
          <Switch>
            <Route exact path={"/"} component={Home} />
            <Route exact path={"/resume"} component={Resume} />
            <Route exact path={"/work"} component={Work} />
          </Switch>
        </div>
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
