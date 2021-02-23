import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <i class="far fa-newspaper"></i>
        <p>NEWS</p>
      </div>
      <div className="mode">
        <i class="far fa-sun"></i>
        <p>Mode</p>
      </div>
    </div>
  );
}

export default Navbar;
