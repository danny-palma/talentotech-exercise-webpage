import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/main/main";
import Login from "./pages/login/login";
import PanelIndex from "./pages/panel";
import PanelMain from "./pages/panel/main/main";
import Bootcamps from "./pages/panel/bootcamps/bootcamps";
import BootcampDetails from "./pages/panel/bootcamps/bootcamp-details/bootcamp-details";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/panel" element={<PanelIndex />}>
          <Route path="" element={<PanelMain />} />
          <Route path="bootcamps" element={<Bootcamps />}/>
          <Route path="bootcamps/:id" element={<BootcampDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
