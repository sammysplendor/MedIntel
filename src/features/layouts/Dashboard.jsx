import { Outlet } from "react-router-dom";
import TopNav from "../../components/TopNav";
import styles from "../../styles/features styles/Dashboard.module.css";
import Sidebar from "../../components/Sidebar";

const MainLayout = () => {
  return (
    <div className={styles.appContainer}>
      <TopNav />

      <Sidebar />

      <main className={styles.contentArea}>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
