/* @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';

import { getHomeStyles } from './styles';


function Home() {
  return (
    <div className="container.fluid d-flex h-100 flex-column" css={getHomeStyles}>
      <div className="row flex-fill d-flex" align="center">
        <div className="col-6 d-flex justify-content-end">
          <p>HAS</p>
        </div>
      </div>
      <div className="row flex-fill d-flex" align="center">
        <div className="col-5">
          <p>KDES</p>
        </div>
      </div>
      <div className="row flex-fill d-flex" align="center">
        <div className="col-6 d-flex justify-content-end">
          <p>IGN</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
