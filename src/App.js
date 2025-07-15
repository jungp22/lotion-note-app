import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Homepage from "./pages/Homepage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Homepage mainView = "empty"/>}></Route>
        <Route path="/notes/:id" element={<Homepage  mainView = "viewonly"/>}></Route>
        <Route path="/notes/:id/edit" element={<Homepage mainView = "edit"/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
