import React from 'react';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <div className="container">
      <div className="row">
        <nav>
          <div className="col">
            <li>
              <Link to={"/"}>HaskDesign</Link>
            </li>
          </div>
          <div className="col">
            <li>
              <Link to={"/about"}>About</Link>
            </li>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
