/* @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';

import { getPieceOfWorkStyles } from './styles';


function PieceOfWork({ pieceOfWork }) {
  return (
    <div className="container.fluid m-2" css={getPieceOfWorkStyles}>
      <div className="row">
        <div className="col-12">
          <h1>{pieceOfWork.title}</h1>
        </div>
      </div>
    </div>
  );
}

export default PieceOfWork;
