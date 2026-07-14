import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "../features/auth/Signin";
import Signup from "../features/auth/Signup";
import MainLayout from "../features/layouts/MedIntel";
import Dashboard from "../features/layouts/Dashboard";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/MedIntel" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
