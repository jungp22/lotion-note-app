import { useState } from "react";
import Header from "../components/Header";
import EmptyNote from "../components/EmptyNote";

import "../style/styles.css";
import NoteList from "../components/NoteList";
import NoteEdit from "../components/NoteEdit";
import NoteView from "../components/NoteView";


const Homepage = ({ mainView }) => {
  const [showNoteList, setShowNoteList] = useState(false);

  function toggleList() {
    showNoteList ? setShowNoteList(false) : setShowNoteList(true);
    console.log(showNoteList);
  }

  return (
    <div className="page">
      <Header toggleList={toggleList} />

      <div className="main">
        <NoteList showNoteList={showNoteList} />
        {mainView === "empty" && <EmptyNote />}
        {mainView === "viewonly" && <NoteView />}
        {mainView === "edit" && <NoteEdit />}
      </div>
    </div>
  );
};

export default Homepage;
