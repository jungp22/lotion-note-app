import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Note = () => {
  return (
    <div className="Note">
      <div className="NoteHeader">
        <div className="NoteTitle">
          <input type="text"></input>
          <input type="datetime-local" />
        </div>
        <div className="NoteTitleButtons">
          <button>Save</button>
          <button>Delete</button>
        </div>
      </div>
      <ReactQuill theme="snow" />
    </div>
  );
};

export default Note;
