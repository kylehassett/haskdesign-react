/* @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';

import { getHomeStyles } from './styles';


function Home() {
  return (
    <div className="container.fluid h-100 d-flex flex-column" css={getHomeStyles}>
      <div className="row d-flex" align="center">
        <div className="col-6 d-flex justify-content-end align-items-end">
          <p>HAS</p>
        </div>
      </div>
      <div className="row d-flex" align="center">
        <div className="col-6 d-flex justify-content-center align-items-center">
          <p>KDES</p>
        </div>
      </div>
      <div className="row d-flex" align="center">
        <div className="col-6 d-flex justify-content-end align-items-start">
          <p>IGN</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
