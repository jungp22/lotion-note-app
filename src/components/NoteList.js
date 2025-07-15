import React from "react";
import "../style/NoteList.css";
const NoteList = ({showNoteList}) => {
  return (
    <>
      {showNoteList && (
        <div className="NoteList">
          <div className="ListHeader">
            <h3>Notes</h3>
            <button>+</button>
          </div>
        </div>
      )}
    </>
  );
};

export default NoteList;
