import "./Nav.css";
import "./Focuslink.css";
// import Light from "../img/sonne.png";
// import Dark from "../img/mond.png";
import { useState } from "react";

const Nav = ({ getModel, setModel }) => {
  const modelChange = () => {
    setModel((presentModel) => !presentModel);
  };

  return (
    <nav className="navbar">
      <p>JS.</p>
      <div>
        <a href="#">projects</a>
        <a href="#">skills</a>
        <a href="#">contact</a>
        <div onClick={modelChange} className="modelIcon"></div>
      </div>
    </nav>
  );
};

export default Nav;
