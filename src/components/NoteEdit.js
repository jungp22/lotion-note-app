import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../style/Note.css";

const NoteEdit = () => {
  function handleDelete(){
    const answer = window.confirm("Are you sure?");
    if (answer) {
      window.confirm("Ok");
    }

  }
  return (
    <div className="Note">
      <div className="NoteHeader">
        <div className="NoteTitle">
          <input type="text"></input>
          <input type="datetime-local" />
        </div>
        <div className="NoteTitleButtons">
          <button>Save</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
      <ReactQuill theme="snow" />
    </div>
  );
};

export default NoteEdit;
