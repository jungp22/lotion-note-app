import React from "react";
import "../style/NoteItem.css";

const NoteItem = ({ item, index }) => {
  function handleNoteClick() {
    window.location.replace("/notes/" + (index + 1));
  }
  return (
    <button className="NoteItem" onClick={handleNoteClick}>
      <h2>{item.title}</h2>
      <p>{item.date}</p>
      <div className="content">
        <p>{item.content}</p>
        <p>{index}</p>
      </div>
    </button>
  );
};

export default NoteItem;
