import React from 'react';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Link to={"/"}>HaskDesign</Link>
        </div>
        <div className="col">
          <Link to={"/work"}>Work</Link>
        </div>
        <div className="col">
          <Link to={"/resume"}>Resume</Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
