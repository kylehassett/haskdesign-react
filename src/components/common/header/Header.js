/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import Switch from 'react-switch';

import { setUserInterfaceMode, userInterfaceMode } from '../../../actions';
import { getHeaderStyles } from "./styles";


function Header(props) {
  const handleCheckChanged = (checked) => {
    props.setUserInterfaceMode(checked ? userInterfaceMode.DARK_MODE : userInterfaceMode.LIGHT_MODE);
  };

  const inDarkMode = props.userInterfaceMode === userInterfaceMode.DARK_MODE;

  const renderLink = (href, title) => {
    return (
      <li className={`
        nav-item
        ${props.location.pathname === href ? "active" : "border-right border-light"}
        pl-3
        pr-3
        d-inline-flex
        align-items-center
      `}>
        <Link
          to={href}
          className={`nav-link ${
            props.location.pathname === href
              ? inDarkMode ? "text-dark" : "text-light"
              : inDarkMode ? "text-light" : "text-dark"
          }`}
        >
          {title}
        </Link>
      </li>
    );
  };

  const theme = useTheme();

  return (
    <nav
      className={`navbar navbar-expand-xl ${inDarkMode ? 'navbar-dark' : 'navbar-light'}`}
      css={(theme) => getHeaderStyles(theme, inDarkMode)}
    >
      <Link to={"/"} className="navbar-brand">
        <h1>Hask Design</h1>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse align-self-stretch" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto align-self-stretch">
          { renderLink("/", "Home") }
          { renderLink("/work", "Work") }
          { renderLink("/resume", "Resume") }
          <div
            className={`nav-item pl-3 pt-2 pb-2 ${inDarkMode ? "text-light" : "text-dark"}`}
            id="uiColorModeSwitchArea"
          >
            <p>Dark Mode: </p>
            <Switch
              checked={inDarkMode}
              checkedIcon={false}
              offColor={theme.colors.ink.twenty}
              onChange={handleCheckChanged}
              onColor={theme.colors.background}
              uncheckedIcon={false}
            />
          </div>
        </ul>
      </div>
    </nav>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
