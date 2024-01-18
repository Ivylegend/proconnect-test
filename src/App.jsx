import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import Settings from "./pages/Settings/Settings";
import SignUp from "./pages/SignUp/SignUp";
import SupportedSchools from "./pages/SupportedSchools/SupportedSchools";
import Documents from "./pages/Documents/Documents";
import Profile from "./pages/Profile/Profile";
import Help from "./pages/Help/Help";
import ApplicationChecklist from "./pages/ApplicationChecklist/ApplicationChecklist";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/application-checklist"
          element={<ApplicationChecklist />}
        />
        <Route path="/supported-schools" element={<SupportedSchools />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/profile" element={<Settings />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
