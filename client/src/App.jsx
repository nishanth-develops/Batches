import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import CommunityPage from "./pages/CommunityPage";
import BatchPage from "./pages/BatchPage";
import DepartmentPage from "./pages/DepartmentPage";
import CompaniesPage from "./pages/CompaniesPage";
import CompanyDetailsPage from "./pages/CompanyDetailsPage";
import { SignIn, SignUp, SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
import Centered from "./components/Centered";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth Pages */}
        <Route path="/signin" element={<Centered><SignIn routing="path" path="/signin" /></Centered>} />
        <Route path="/signup" element={<Centered><SignUp routing="path" path="/signup" /></Centered>} />
        
        {/* Protected App */}
        <Route path="/" element={
          <SignedIn>
            <RootLayout />
          </SignedIn>}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="community">
            <Route index element={<CommunityPage />} />
            <Route path="batch/:year" element={<BatchPage />} />
            <Route
              path="batch/:year/:department"
              element={<DepartmentPage />}
            />
          </Route>
          <Route path="companies">
            <Route index element={<CompaniesPage />} />
            <Route path=":name" element={<CompanyDetailsPage />} />
          </Route>
        </Route>

        {/* Catch-all for SignedOut users */}
        <Route path="*" element={
          <SignedOut>
            <RedirectToSignIn />
          </SignedOut>
        } />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
