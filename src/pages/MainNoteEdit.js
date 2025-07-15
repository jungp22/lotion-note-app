import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import EmptyNote from "../components/EmptyNote";

import "../style/header.css";
import hamburger from "../data/image.png";
import ReactQuill from "react-quill";
import ExampleNote from "../components/ExampleNote";

const MainNoteEdit = () => {
  const [showNoteList, setShowNoteList] = useState(false);

  function toggleList() {
    showNoteList?setShowNoteList(false):setShowNoteList(true);
  }

  return (
    <div className="page">
      <div className="Header">
        <button onClick={toggleList}>
          <img src={hamburger} alt="menu" />
        </button>
        <div className="title">
          <a href="/notes"><h1>Lotion</h1></a>
          <p>Like notion but worse</p>
        </div>
        <div className="cooldiv"></div>
      </div>
      <div className="main">
        {showNoteList && (
          <div className="NoteList">
            <div className="ListHeader">
              <h3>Notes</h3>
              <button>+</button>
            </div>
          </div>
        )}
        <div className="EmptyNote">
          Click here to add a new note
        </div>
      </div>
    </div>
  );
};

export default MainNoteEdit;
