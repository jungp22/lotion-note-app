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
    console.log(showNoteList)
  }

  return (
    <div className="page">
      <Header toggleList = {toggleList}/>
      <div className="main">
        {showNoteList && (
          <div className="NoteList">
            <div className="ListHeader">
              <h3>Notes</h3>
              <button>+</button>
            </div>
          </div>
        )}
        <div className="Note">
          <div className="NoteHeader">
            <div className="NoteTitle">
              <input type="text"></input>
              <input type="datetime-local" />
            </div>
            <div className="NoteTitleButtons">
              <button>Save</button>
              <button>Delete</button>
            </div>
          </div>
          <ReactQuill theme="snow" />
        </div>
      </div>
    </div>
  );
};

export default MainNoteEdit;
