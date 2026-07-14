import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "../features/auth/Signin";
import Signup from "../features/auth/Signup";
import MainLayout from "../features/layouts/Dashboard";
import Overview from "../features/layouts/Overview";
import Disease_trends from "../features/layouts/Disease_trends";
import Countries from "../features/layouts/Countries";
import Vaccinations from "../features/layouts/Vaccinations";
import Health_news from "../features/layouts/Health_news";
import Logout from "../features/layouts/Logout";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Dashboard" element={<MainLayout />}>
          <Route index element={<Overview />} />
          <Route path="Disease_trends" element={<Disease_trends />} />
          <Route path="Countries" element={<Countries />} />
          <Route path="Vaccinations" element={<Vaccinations />} />
          <Route path="Health_news" element={<Health_news />} />
          <Route path="Logout" element={<Logout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
