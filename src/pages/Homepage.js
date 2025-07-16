import { useState } from "react";
import Header from "../components/Header";
import EmptyNote from "../components/EmptyNote";

import "../style/styles.css";
import NoteList from "../components/NoteList";
import NoteEdit from "../components/NoteEdit";
import NoteView from "../components/NoteView";


const Homepage = ({ mainView }) => {
  const [showNoteList, setShowNoteList] = useState(false);
  const [noteItems,setNoteItems] = useState([]);

  function toggleList() {
    showNoteList ? setShowNoteList(false) : setShowNoteList(true);
  }
  function addNote() {
    const currentDate = new Date();
    setNoteItems([{
      title: "Untitled",
      content: "",
      date: currentDate.toLocaleDateString('default',{month:"long", day:"numeric", year:"numeric" }) + " at " + currentDate.toLocaleTimeString('default', {timeStyle:"short"})
    },...noteItems])
  }

  return (
    <div className="page">
      <Header toggleList={toggleList} />

      <div className="main">
        <NoteList showNoteList={showNoteList} noteItems={noteItems} addNote = {addNote}/>
        {mainView === "empty" && <EmptyNote />}
        {mainView === "viewonly" && <NoteView noteItems={noteItems} />}
        {mainView === "edit" && <NoteEdit noteItems={noteItems} />}
      </div>
    </div>
  );
};

export default Homepage;
