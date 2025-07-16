import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../style/Note.css";
import { useParams } from "react-router-dom";

const NoteEdit = ({ noteItems }) => {
  const info = useParams();
  console.log(info.id);

  function handleDelete() {
    const answer = window.confirm("Are you sure?");
    if (answer) {
      window.confirm("Ok");
    }
  }
  function handleSave() {
    window.location.replace("/notes/" + info.id);
  }
  return (
    <div className="Note">
      <div className="NoteHeader">
        <div className="NoteTitle">
          <input type="text" value={noteItems[info.id - 1].title}></input>
          <input type="datetime-local" />
        </div>
        <div className="NoteTitleButtons">
          <button onClick={handleSave}>Save</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
      <ReactQuill
        theme="snow"
        value={noteItems[info.id - 1].content}
        placeholder="Your Note Here"
      />
    </div>
  );
};

export default NoteEdit;
