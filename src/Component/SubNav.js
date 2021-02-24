import React from "react";
import "./SubNav.css";
import techImage from "../Image/tech.jpg";
import appleImage from "../Image/apple.jpg";
import microsoftImage from "../Image/Microsoft.jpg";
import playstationImage from "../Image/PlayStation.jpg";
import bitcoinImage from "../Image/bitcoin.jpg";
import teslaImage from "../Image/tesla.jpg";
import netflixImage from "../Image/netflix.jpg";
import Links from "./Links";
import { Link } from "react-router-dom";

function SubNav() {
  return (
    <div className="subnav">
      <Link to="/">
        <Links image={techImage} title="Tech" />
      </Link>

      <Link to="/apple">
        <Links image={appleImage} title="Apple" />
      </Link>

      <Link to="/bitcoin">
        <Links image={bitcoinImage} title="Bitcoin" />
      </Link>

      <Link to="/google">
        <Links image={techImage} title="Google" />
      </Link>

      <Link to="/microsoft">
        <Links image={microsoftImage} title="Microsoft" />
      </Link>

      <Link to="/netflix">
        <Links image={netflixImage} title="Netflix" />
      </Link>

      <Link to="/playstation">
        <Links image={playstationImage} title="PlayStation" />
      </Link>

      <Link to="/tesla">
        <Links image={teslaImage} title="Tesla" />
      </Link>
    </div>
  );
}

export default SubNav;
