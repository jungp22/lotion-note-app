import React from "react";
import "../style/Note.css";

const NoteView = () => {
  return (
    <div className="Note">
      <div className="NoteHeader">
        <div className="NoteTitle">
          <h2>test</h2>
          <p>date</p>
        </div>
        <div className="NoteTitleButtons">
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>
      <p>
        This is just a test
      </p>
    </div>
  );
};

export default NoteView;
