/* @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';

import { getHomeStyles } from './styles';


function Home() {
  return (
    <div className="w-100 h-100 d-flex flex-row" css={getHomeStyles}>
      <div className="container.fluid h-100 d-flex flex-column flex-fill">
        <div className="row d-flex" align="center">
          <div className="col d-flex justify-content-end align-items-end">
            <p>HAS</p>
          </div>
        </div>
        <div className="row d-flex" align="center">
          <div className="col d-flex justify-content-center align-items-center">
            <p>KDES</p>
          </div>
        </div>
        <div className="row d-flex" align="center">
          <div className="col d-flex justify-content-end align-items-start">
            <p>IGN</p>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column justify-content-center h-100 ml-3">
        <figure>
          <img src="../../MyFaceCutout.png" className="img-fluid h-100" alt="My face cutout"/>
        </figure>
      </div>
    </div>
  );
}

export default Home;
