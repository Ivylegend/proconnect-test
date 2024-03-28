import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import Settings from "./pages/Settings/Settings";
import SignUp from "./pages/SignUp/SignUp";
import SupportedSchools from "./pages/SupportedSchools/SupportedSchools";
import Documents from "./pages/Documents/Documents";
import Profile from "./pages/Profile/Profile";
import Form from "./components/Form/Form";
import Help from "./pages/Help/Help";
import ApplicationChecklist from "./pages/ApplicationChecklist/ApplicationChecklist";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import { ToastContainer } from "react-toastify";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import FormLayout from "./layout/FormLayout";
import DashboardLayout from "./layout/DashboardLayout";
import ChangePassword from "./pages/ChangePassword/ChangePassword";
import RecommenderForm from "./pages/RecommenderForm";
import Candidates from "./pages/Candidates";
import ApplicationStatus from "./pages/ApplicationStatus";
import StudentDashboard from "./pages/StudentDashboard";

function App() {
  return (
    <>
      <ToastContainer theme={"colored"}></ToastContainer>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/dashboard"
            element={
              <DashboardLayout title={"Dashboard"}>
                <Dashboard />
              </DashboardLayout>
            }
          />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/application-checklist"
            element={
              <DashboardLayout title={"Application Checklist"}>
                <ApplicationChecklist />
              </DashboardLayout>
            }
          />
          <Route
            path="/supported-schools"
            element={
              <DashboardLayout title={"Supported Schools"}>
                <SupportedSchools />
              </DashboardLayout>
            }
          />
          <Route
            path="/documents"
            element={
              <DashboardLayout title={"Documents"}>
                <Documents />
              </DashboardLayout>
            }
          />
          <Route
            path="/candidate-page"
            element={
              <DashboardLayout title={"Candidates"}>
                <Candidates />
              </DashboardLayout>
            }
          />
          <Route
            path="/school-dashboard"
            element={
              <DashboardLayout title={"School Dashboard"}>
                <StudentDashboard />
              </DashboardLayout>
            }
          />
          <Route
            path="/student-application-details"
            element={
              <DashboardLayout title={"Student Application Details"}>
                <ApplicationStatus />
              </DashboardLayout>
            }
          />
          <Route
            path="/profile"
            element={
              <DashboardLayout title={"Profile"}>
                <Profile />
              </DashboardLayout>
            }
          />
          <Route
            path="/help"
            element={
              <DashboardLayout title={"Help"}>
                <Help />
              </DashboardLayout>
            }
          />
          <Route
            path="/school-application"
            element={
              <FormLayout>
                <Form />
              </FormLayout>
            }
          />
          <Route
            path="/recommender-form"
            element={
              <FormLayout>
                <RecommenderForm />
              </FormLayout>
            }
          />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/change-password" element={<ChangePassword />} />

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
