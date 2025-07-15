import React, { useState } from "react";
import "../style/header.css";
import hamburger from "../data/image.png";
const Header = ( {showNoteList,setShowNoteList}) => {
  function doSomething() {
    if (showNoteList) {
      setShowNoteList(false);
    } else {
      setShowNoteList(true);
    }
    console.log(showNoteList);
  }
  return (
    <div>
      <div className="Header">
        <button onClick={doSomething}>
          <img src={hamburger} alt="menu" />
        </button>
        <div className="title">
          <h1>Lotion</h1>
          <p>Like notion but worse</p>
        </div>
        <div className="cooldiv"></div>
      </div>
      <div className="NoteList">NoteList</div>
    </div>
  );
};

export default Header;
