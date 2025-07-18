import "../style/NoteItem.css";

const NoteItem = ({ item, index }) => {
  function handleNoteClick() {
    window.location.replace("/notes/" + (index + 1));
  }
  const formattedDate =
    new Date(item.date).toLocaleDateString("default", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }) +
    " at " +
    new Date(item.date).toLocaleTimeString("default", { timeStyle: "short" });

  return (
    <button className="NoteItem" id={item.id} onClick={handleNoteClick}>
      <h2>{item.title}</h2>
      <p>{formattedDate}</p>
      <div className="content">
        <p>{item.content}</p>
      </div>
    </button>
  );
};

export default NoteItem;
