import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import CommunityPage from "./pages/CommunityPage";
import BatchPage from "./pages/BatchPage";
import DepartmentPage from "./pages/DepartmentPage";

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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
