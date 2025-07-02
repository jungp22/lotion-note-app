import React, { useState } from "react";
import "../style/header.css";
import hamburger from "../data/image.png"
const Header = () => {
    const [showNoteList, setShowNoteList] = useState(false);
  return (
    <div className="Header">
      <button ><img src={hamburger} alt="menu"/></button>
      <div className="title">
        <h1>Lotion</h1>
        <p>Like notion but worse</p>
      </div>
      <div className="cooldiv"></div>
    </div>
  );
};

export default Header;
