import React from "react";
import "../style/NoteItem.css";

const NoteItem = ({ item, index }) => {
  function handleNoteClick(){
    window.location.replace('/notes/' +(index+1))
  }
  return (
      <button className="NoteItem" onClick={handleNoteClick}>
        <h2>{item.title}</h2>
        <p>{item.content}</p>
        <p>{index}</p>
      </button>
  );
};

export default NoteItem;
