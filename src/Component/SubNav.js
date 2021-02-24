import React from "react";
import Link from "./Link";
import "./SubNav.css";
import techImage from "../Image/tech.jpg";
import appleImage from "../Image/apple.jpg";
import microsoftImage from "../Image/Microsoft.jpg";
import playstationImage from "../Image/PlayStation.jpg";
import bitcoinImage from "../Image/bitcoin.jpg";
import teslaImage from "../Image/tesla.jpg";
import netflixImage from "../Image/netflix.jpg";

function SubNav() {
  return (
    <div className="subnav">
      <Link image={techImage} title="Tech" />
      <Link image={appleImage} title="Apple" />
      <Link image={bitcoinImage} title="Bitcoin" />
      <Link image={techImage} title="Google" />
      <Link image={microsoftImage} title="Microsoft" />
      <Link image={netflixImage} title="Netflix" />
      <Link image={playstationImage} title="PlayStation" />
      <Link image={teslaImage} title="Tesla" />
    </div>
  );
}

export default SubNav;
