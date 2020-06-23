import React from "react";
import "./Header.css";

const Header = props => (
  <div className="header">
    <div className="title">{props.children}</div>
    <div className="scores">
      Score: {props.score} | Top Score: {props.topscore}
    </div>
    <br/><br/>
    <div className="instructions">
        Click on an image to earn points, but don't click on any more than once!
    </div>
  </div>
);

export default Header;