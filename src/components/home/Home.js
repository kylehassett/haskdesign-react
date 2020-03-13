/* @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getHomeStyles } from './styles';


function Home(props) {
  return (
    <div className="container.fluid"  css={getHomeStyles}>
      <div className="row" align="center">
        <div className="col">
          <p>Hi! Welcome to haskdesign.</p>
          <p>The site is currently under construction. Thanks for visiting!</p>
          <p>{props.userInterfaceMode}</p>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userInterfaceMode: state.userInterface.userInterfaceMode
  };
};

export default withRouter(connect(mapStateToProps)(Home));
