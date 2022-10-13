import React from "react";

function Navbar({ isScrolled }) {
  return (
    <nav className={isScrolled ? "scroll" : null}>
      <div className="container">
        <div className="logo">CINEMA</div>
        <ul className="nav-link">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#search">Search</a>
          </li>
        </ul>
        <div className="humberger-menu">
          <input type="checkbox" />
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </nav>
  );
}

export default React.memo(Navbar);
