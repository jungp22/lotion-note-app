import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import EmptyNote from "../components/EmptyNote";

import "../style/header.css";
import hamburger from "../data/image.png";
import ReactQuill from "react-quill";
import ExampleNote from "../components/ExampleNote";

const MainEmpty = () => {
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
        <EmptyNote/>
      </div>
    </div>
  );
};

export default MainEmpty;
