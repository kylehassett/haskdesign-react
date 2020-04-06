/* @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { Link } from 'react-router-dom';

import { getFooterStyles } from './styles';


function Footer() {
  const renderLink = (link) => (
    <div className={`
      d-flex
      flex-column
      ml-5
      pt-3
    `} >
      <Link to={link.href}>
        {link.text}
      </Link>
    </div>
  );

  const linkList = [
    { href: '/', text: 'Home' },
    { href: '/work', text: 'Work' },
    { href: '/resume', text: 'Resume' }
  ];

  return (
    <div className="container.fluid pb-3" css={getFooterStyles}>
      <div className="row">
        <div className="col">
          { linkList.map(renderLink) }
        </div>
        <div className="col d-flex flex-column justify-content-start align-items-end pt-3 mr-5">
          <p>&copy; Kyle Hassett</p>
          <p>Programmer Extraordinaire</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
