import { useEffect, useState } from "react";
import Header from "../components/Header";
import EmptyNote from "../components/EmptyNote";

import "../style/styles.css";
import NoteList from "../components/NoteList";
import NoteEdit from "../components/NoteEdit";
import NoteView from "../components/NoteView";
import { v1 as uuidv1 } from 'uuid';

const Homepage = ({ mainView }) => {
  const [showNoteList, setShowNoteList] = useState("true");
  const [noteItems, setNoteItems] = useState([]);

  function toggleList() {
    const newShowList = showNoteList === "true" ? "false" : "true";
    setShowNoteList(newShowList);
    localStorage.setItem("showNoteList", newShowList);
  }

  useEffect(() => {
    const savedNoteList = localStorage.getItem("showNoteList");
    setShowNoteList(savedNoteList ? savedNoteList : "true");
  }, []);

  function addNote() {
    const currentDate = new Date();
    const newNoteItems = [
      {
        title: "Untitled",
        content: "",
        date:
          currentDate.toLocaleDateString("default", {
            month: "long",
            day: "numeric",
            year: "numeric",
          }) +
          " at " +
          currentDate.toLocaleTimeString("default", { timeStyle: "short" }),
        id: uuidv1()
      },
      ...noteItems,
    ]
    setNoteItems(newNoteItems)
    localStorage.setItem("noteItems", newNoteItems);
    console.log(newNoteItems)

  }

  return (
    <div className="page">
      <Header toggleList={toggleList} />

      <div className="main">
        <NoteList
          showNoteList={showNoteList}
          noteItems={noteItems}
          addNote={addNote}
        />
        {mainView === "empty" && <EmptyNote />}
        {mainView === "viewonly" && <NoteView noteItems={noteItems} />}
        {mainView === "edit" && <NoteEdit noteItems={noteItems} />}
      </div>
    </div>
  );
};

export default Homepage;
