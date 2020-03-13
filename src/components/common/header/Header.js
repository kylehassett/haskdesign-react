/* @jsx jsx */
import { jsx } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Switch from 'react-switch';

import { setUserInterfaceMode, userInterfaceMode } from '../../../actions';
import { getHeaderStyles } from "./styles";


function Header(props) {
  const handleCheckChanged = (checked) => {
    props.setUserInterfaceMode(checked ? userInterfaceMode.DARK_MODE : userInterfaceMode.LIGHT_MODE);
  };

  const renderLink = (href, title) => {
    return (
      <div className="col" align="center">
        <Link to={href}>{title}</Link>
      </div>
    );
  };

  const theme = useTheme();

  return (
    <div className="container.fluid" css={getHeaderStyles}>
      <div className="container" align="center">
        <div className="row">
          <div className="col-8 offset-md-2" align="center">
            <h1>Hask Design</h1>
          </div>
          <div className="col-md-2" id="uiColorModeSwitchArea">
            <p>Dark Mode: </p>
            <Switch
              checked={props.userInterfaceMode === userInterfaceMode.DARK_MODE}
              checkedIcon={false}
              onChange={handleCheckChanged}
              onColor={theme.colors.primaryDark}
              uncheckedIcon={false}
            />
          </div>
        </div>
        <div className="row">
          { renderLink("/", "Home") }
          { renderLink("/work", "Work") }
          { renderLink("/resume", "Resume") }
        </div>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    userInterfaceMode: state.userInterface.userInterfaceMode
  };
}

const mapDispatchToProps = {
  setUserInterfaceMode
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
