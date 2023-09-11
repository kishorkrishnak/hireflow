import { useSelector } from "react-redux";
import { Navigate, Outlet, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import { Footer, Navbar } from "./components";
import {
  About,
  AuthPage,
  Companies,
  CompanyProfile,
  FindJobs,
  JobDetail,
  UploadJob,
  UserProfile,
} from "./pages";
import Applications from "./pages/Applications";
import Dashboard from "./pages/Dashboard";

function Layout() {
  const { user } = useSelector((state) => state.user);
  const location = useLocation();
  console.log(user);

  return user?.token ? (
    <Outlet />
  ) : (
    <Navigate to="/user-auth" state={{ from: location }} replace />
  );
}

function App() {
  const { user } = useSelector((state) => state.user);
  return (
    <main className="bg-[#f7fdfd]">
      <Navbar />

      <Routes>
        <Route element={<Layout />}>
          <Route path="/applications/:id" element={<Applications />} />
          <Route path={"/profile/:id"} element={<UserProfile />} />
          <Route path={"/upload-job"} element={<UploadJob />} />
        </Route>
        <Route path={"/company-profile/:id"} element={<CompanyProfile />} />
        <Route path="/" element={<Navigate to="/find-jobs" replace={true} />} />
        <Route path="/find-jobs" element={<FindJobs />} />
        <Route path={"/job-detail/:id"} element={<JobDetail />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/user-auth" element={<AuthPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/companies" element={<Companies />} />
      </Routes>
      {user && <Footer />}
    </main>
  );
}

export default App;
