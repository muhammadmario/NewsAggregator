import React from "react";
import Link from "./Link";
import "./SubNav.css";
import techImage from "../Image/tech.jpg";
import appleImage from "../Image/apple.jpg";
import microsoftImage from "../Image/Microsoft.jpg";
import playstationImage from "../Image/PlayStation.jpg";

function SubNav() {
  return (
    <div className="subnav">
      <Link image={techImage} title="Tech" />
      <Link image={appleImage} title="Apple" />
      <Link image={techImage} title="Tesla" />
      <Link image={microsoftImage} title="Microsoft" />
      <Link image={playstationImage} title="PlayStation" />
      <Link image={techImage} title="Google" />
      <Link image={techImage} title="Netflix" />
      <Link image={techImage} title="Bitcoin" />
    </div>
  );
}

export default SubNav;
