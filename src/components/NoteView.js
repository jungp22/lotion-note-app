import React from "react";
import "../style/Note.css";
import { useParams } from "react-router-dom";

const NoteView = ({ noteItems }) => {
  const info = useParams();
  console.log(info.id);

  function handleNoteEdit() {
    window.location.replace("/notes/" + info.id + "/edit");
  }

  function handleDelete() {
    const answer = window.confirm("Are you sure?");
    if (answer) {
      window.confirm("Ok");
    }
  }
  return (
    <div className="Note">
      <div className="NoteHeader">
        <div className="NoteTitle">
          <h2>{noteItems[info.id - 1].title}</h2>
          <p>date</p>
        </div>
        <div className="NoteTitleButtons">
          <button onClick={handleNoteEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
      <div className="NoteContent">
        <p>{noteItems[info.id - 1].content}</p>
      </div>
    </div>
  );
};

export default NoteView;
