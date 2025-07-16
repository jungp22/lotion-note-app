import { useState } from "react";
import Header from "../components/Header";
import EmptyNote from "../components/EmptyNote";

import "../style/styles.css";
import NoteList from "../components/NoteList";
import NoteEdit from "../components/NoteEdit";
import NoteView from "../components/NoteView";

import exdata from "../data/exdata";

const Homepage = ({ mainView }) => {
  const [showNoteList, setShowNoteList] = useState(false);

  const [noteItems, setNoteItems] = useState(exdata)

  function toggleList() {
    showNoteList ? setShowNoteList(false) : setShowNoteList(true);
  }

  return (
    <div className="page">
      <Header toggleList={toggleList} />

      <div className="main">
        <NoteList showNoteList={showNoteList} noteItems={noteItems} />
        {mainView === "empty" && <EmptyNote />}
        {mainView === "viewonly" && <NoteView  noteItems={noteItems}/>}
        {mainView === "edit" && <NoteEdit noteItems={noteItems} />}
      </div>
    </div>
  );
};

export default Homepage;
