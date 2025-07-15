import React from "react";
import "../style/NoteList.css";
import NoteItem from "./NoteItem";
const NoteList = ({showNoteList}) => {
  return (
    <>
      {showNoteList && (
        <div className="NoteList">
          <div className="ListHeader">
            <h2>Notes</h2>
            <button>+</button>
          </div>
          <div className="List">
            <NoteItem/>
            <NoteItem/>
            <NoteItem/>
            <NoteItem/>
          </div>
        </div>
      )}
    </>
  );
};

export default NoteList;
