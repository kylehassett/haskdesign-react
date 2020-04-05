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
      ml-3
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
      { linkList.map(renderLink) }
    </div>
  );
}

export default Footer;
