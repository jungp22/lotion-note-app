import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import MainEmpty from "./pages/MainEmpty";
import MainNoteEdit from "./pages/MainNoteEdit";
import MainNoteView from "./pages/MainNoteView";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<MainEmpty />}></Route>
        <Route path="/notes/:id" element={<MainNoteView />}></Route>
        <Route path="/notes/:id/edit" element={<MainNoteEdit />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
