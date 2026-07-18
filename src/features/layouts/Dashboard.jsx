import { Outlet } from "react-router-dom";
import TopNav from "../../components/TopNav";
import Sidebar from "../../components/Sidebar";

const MainLayout = () => {
  return (
    <div>
      <TopNav />

      <Sidebar />

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
