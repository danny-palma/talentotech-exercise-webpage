import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter, Route, Routes } from "react-router-dom";

import { PageContextProvider } from "./contexts/panelPageContext";
import { UserProvider } from "./contexts/userContext";
import Login from "./pages/login/login";
import Main from "./pages/main/main";
import PanelIndex from "./pages/panel";
import AdminMain from "./pages/panel/admin/admin";
import AdminBootcampAsistencia from "./pages/panel/bootcamps/admin-bootcamp/admin-asistencias";
import AdminBootcampSesiones from "./pages/panel/bootcamps/admin-bootcamp/admin-sesiones";
import AdminBootcampUsuarios from "./pages/panel/bootcamps/admin-bootcamp/admin-usuarios";
import BootcampDetails from "./pages/panel/bootcamps/bootcamp-details/bootcamp-details";
import Bootcamps from "./pages/panel/bootcamps/bootcamps";
import Faq from "./pages/panel/faq/faq";
import Hackathons from "./pages/panel/hackathons/hackathons";
import Jobs from "./pages/panel/jobs/jobs";
import PanelMain from "./pages/panel/main/main";
import Marketplace from "./pages/panel/marketplace/marketplace";
import UserManual from "./pages/panel/user-manual/user-manual";

function App() {
  return (
    <UserProvider>
      <PageContextProvider>
        <HashRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/panel" element={<PanelIndex />}>
              <Route path="" element={<PanelMain />} />
              <Route path="admin" element={<AdminMain />} />
              <Route path="bootcamps" element={<Bootcamps />} />
              <Route
                path="bootcamps/:id" //* < -- /panel/bootcamps/"prueba" (id)
                element={<BootcampDetails />}
              />
              <Route
                path="bootcamps/:id/admin-sesiones" //* <-- /panel/bootcamp/"pueba"/admin
                element={<AdminBootcampSesiones />}
              />
              <Route
                path="bootcamps/:id/admin-usuarios"
                element={<AdminBootcampUsuarios />}
              />
              <Route
                path="bootcamps/:id/admin-asistencias"
                element={<AdminBootcampAsistencia />}
              />
              <Route path="hackatons" element={<Hackathons />} />
              <Route path="jobs" element={<Jobs />} />
              <Route path="marketplace" element={<Marketplace />} />
              <Route path="user-manual" element={<UserManual />} />
              <Route path="faq" element={<Faq />} />
            </Route>
          </Routes>
        </HashRouter>
      </PageContextProvider>
    </UserProvider>
  );
}

export default App;
