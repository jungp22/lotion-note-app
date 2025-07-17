import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../style/Note.css";
import { useParams } from "react-router-dom";

const NoteEdit = () => {
  const info = useParams();
  console.log(info.id);
  const noteItems =  JSON.parse(localStorage.getItem("noteItems"))
  let date = (noteItems[info.id - 1].date).substring(0,16)

  console.log((noteItems[info.id - 1].date).substring(0,16))
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
          <input id="EditTitle" type="text" value={noteItems[info.id - 1].title}></input>
          <input type="datetime-local" value={date}/>
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
