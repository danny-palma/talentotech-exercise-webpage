import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./pages/main/main";
import Login from "./pages/login/login";
import PanelIndex from "./pages/panel";

import Faq from "./pages/panel/faq/faq";
import Jobs from "./pages/panel/jobs/jobs";
import PanelMain from "./pages/panel/main/main";
import Bootcamps from "./pages/panel/bootcamps/bootcamps";
import Hackathons from "./pages/panel/hackathons/hackathons";
import UserManual from "./pages/panel/user-manual/user-manual";
import Marketplace from "./pages/panel/marketplace/marketplace";
import BootcampDetails from "./pages/panel/bootcamps/bootcamp-details/bootcamp-details";

import { PageContextProvider } from "./contexts/panel-page-indexer";

function App() {
  
  return (
      <PageContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/panel" element={<PanelIndex />}>
              <Route path="" element={<PanelMain />} />
              <Route path="bootcamps" element={<Bootcamps />} />
              <Route path="bootcamps/:id" element={<BootcampDetails />} />
              <Route path="hackatons" element={<Hackathons />} />
              <Route path="jobs" element={<Jobs />} />
              <Route path="marketplace" element={<Marketplace />} />
              <Route path="user-manual" element={<UserManual />} />
              <Route path="faq" element={<Faq />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </PageContextProvider>
  );
}

export default App;
