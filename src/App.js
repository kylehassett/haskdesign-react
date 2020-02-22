import React from 'react';
import { connect } from 'react-redux';

import './App.sass';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hi! Welcome to haskdesign.
        </p>
        <p>The site is currently under construction. Thanks for visiting!</p>
        <p>{props.userInterfaceMode}</p>
      </header>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userInterfaceMode: state.userInterface.userInterfaceMode
  };
};

export default connect(mapStateToProps)(App);
