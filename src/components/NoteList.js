import React from "react";
import "../style/NoteList.css";
import NoteItem from "./NoteItem";
const NoteList = ({ showNoteList, noteItems }) => {
  return (
    <>
      {showNoteList && (
        <div className="NoteList">
          <div className="ListHeader">
            <h2>Notes</h2>
            <button>+</button>
          </div>
          <div className="List">
            {noteItems.map((item, index) => (
              <NoteItem item={item} index={index} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default NoteList;
