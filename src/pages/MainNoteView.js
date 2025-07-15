import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import EmptyNote from "../components/EmptyNote";
import "react-quill/dist/quill.snow.css";
import "../style/header.css";
import hamburger from "../data/image.png";
import ReactQuill from "react-quill";
import ExampleNote from "../components/ExampleNote";
import Note from "../components/Note";
import NoteList from "../components/NoteList";

const MainNoteView = () => {
  const [showNoteList, setShowNoteList] = useState(false);

  function toggleList() {
    showNoteList ? setShowNoteList(false) : setShowNoteList(true);
  }

  return (
    <div className="page">
      <Header toggleList={toggleList} />

      <div className="main">
        <NoteList showNoteList = {showNoteList}/>
        <Note />
      </div>
    </div>
  );
};

export default MainNoteView;
