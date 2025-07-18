import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../style/Note.css";
import { useParams } from "react-router-dom";

const NoteEdit = () => {
  const info = useParams();
  console.log(info.id);
  const noteItems = JSON.parse(localStorage.getItem("noteItems"));
  let noteDate = noteItems[info.id - 1].date;
  console.log(noteDate.substring(0, 16));

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
  function changeDate(event) {
    const newDate = event.target.value;
    const newList = noteItems;
    newList[info.id - 1].date = (new Date(newDate+ ":00.000Z")).toISOString();
    localStorage.setItem("noteItems", JSON.stringify(newList));
    console.log(document.querySelector('input[type="datetime-local"]').value+ ' ' + newDate)
    document.querySelector('input[type="datetime-local"]').value = newDate;
    window.location.reload();
  }
  function changeTitle(event) {
    const newTitle = event.target.value;
    const newList = noteItems;
    newList[info.id - 1].title = newTitle;
    localStorage.setItem("noteItems", JSON.stringify(newList));
    console.log(document.querySelector('input[id="EditTitle"]').value+ ' ' + newTitle)
    document.querySelector('input[id="EditTitle"]').value = newTitle;
  }

  function handleSave() {
    window.location.replace("/notes/" + info.id);
  }
  return (
    <div className="Note">
      <div className="NoteHeader">
        <div className="NoteTitle">
          <input
            id="EditTitle"
            type="text"
            value={noteItems[info.id - 1].title}
            onChange={changeTitle}
          ></input>
          <input type="datetime-local" value={noteDate.substring(0, 16)} onChange={changeDate} />
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
