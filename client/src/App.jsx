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
import { ToastContainer } from "react-toastify";

function App() {
  return (

    <BrowserRouter>
          <ToastContainer/>
      <Routes>
        {/* Auth Pages */}
        <Route path="/signin" element={<Centered><SignIn routing="path" path="/signin" /></Centered>} />
        <Route path="/signup" element={<Centered><SignUp routing="path" path="/signup" /></Centered>} />

        {/* Public Routes */}
        <Route path="/" element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="community" element={<CommunityPage />} />
          <Route path="companies">
            <Route index element={<CompaniesPage />} />
            <Route path=":name" element={<CompanyDetailsPage />} />
          </Route>
        </Route>

        {/* Protected Routes - Requires Sign In */}
        <Route path="community/batch/:year" element={
          <SignedIn>
            <BatchPage />
          </SignedIn>
        } />
        <Route path="community/batch/:year/:department" element={
          <SignedIn>
            <DepartmentPage />
          </SignedIn>
        } />

        {/* Redirect to sign in if accessing batches while signed out */}
        <Route path="community/batch/*" element={
          <SignedOut>
            <RedirectToSignIn />
          </SignedOut>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
