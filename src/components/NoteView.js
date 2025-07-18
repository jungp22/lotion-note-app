import "../style/Note.css";
import { useParams } from "react-router-dom";

const NoteView = () => {
  const info = useParams();
  console.log(info.id);
  const noteItems =  JSON.parse(localStorage.getItem("noteItems"))
  console.log(noteItems);
  
  function handleNoteEdit() {
    window.location.replace("/notes/" + info.id + "/edit");
  }

  
  function handleDelete() {
    const answer = window.confirm("Are you sure?");
    if (answer) {
      console.log(noteItems[info.id - 1].id)
      console.log(noteItems)
      const test = noteItems.filter(item => item.id !== noteItems[info.id - 1]).id
      console.log(test)
      localStorage.setItem("noteItems", JSON.stringify(noteItems.filter(item => item !== noteItems[info.id - 1])))
      window.location.replace("/notes/");
    }
  }
  const item = noteItems[info.id - 1]

  const formattedDate =
    new Date(item.date).toLocaleDateString("default", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }) +
    " at " +
    new Date(item.date).toLocaleTimeString("default", { timeStyle: "short" });

  return (
    <div className="Note">
      <div className="NoteHeader">
        <div className="NoteTitle">
          <h2>{noteItems[info.id - 1].title}</h2>
          <p>{formattedDate}</p>
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
