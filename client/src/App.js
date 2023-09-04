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
  UserProf,
} from "./pages";

function Layout() {
  const user = true;
  const location = useLocation();
  return user ? (
    <Outlet />
  ) : (
    <Navigate to={"user-auth"} state={{ from: location }} replace />
  );
}
function App() {
  const user = {}
  return (
    <main>
      <Navbar></Navbar>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/"
            element={<Navigate to={"/find-jobs"} replace={true} />}
          />
          <Route path="/find-jobs" element={<FindJobs></FindJobs>} />
          <Route path="/companies" element={<Companies></Companies>} />
          <Route
            path={
              user?.user?.accountType === "seeker"
                ? "/user-profile"
                : "/user-profile/:id"
            }
            element={<UserProf />}
          />

          <Route
            path="/company-profile"
            element={<CompanyProfile></CompanyProfile>}
          />
          <Route
            path="/company-profile/:id"
            element={<CompanyProfile></CompanyProfile>}
          />
          <Route path="/upload-job" element={<UploadJob />} />
          <Route path="/job-detail/:id" element={<JobDetail />} />
        </Route>

        <Route path="/about-us" element={<About />} />
        <Route path="/user-auth" element={<AuthPage />} />
      </Routes>
      {user && <Footer />}
    </main>
  );
}

export default App;
