/* @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';

import { PieceOfWork } from '../pieceOfWork';
import { getWorkStyles } from './styles';


function Work() {
  const piecesOfWork = [
    {
      title: "haskdesign.com",
      description: "",
      bullets: []
    },
    {
      title: "Front End Developer",
      description: "",
      bullets: []
    }
  ];

  return (
    <div className="container.fluid h-100" css={getWorkStyles}>
      { piecesOfWork.map((pieceOfWork) => (<PieceOfWork pieceOfWork={pieceOfWork} />)) }
    </div>
  );
}

export default Work;
