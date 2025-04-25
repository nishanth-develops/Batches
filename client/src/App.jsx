import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import CommunityPage from "./pages/CommunityPage";
import BatchPage from "./pages/BatchPage";
import DepartmentPage from "./pages/DepartmentPage";
import CompaniesPage from "./pages/CompaniesPage";
import CompanyDetailsPage from "./pages/CompanyDetailsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
