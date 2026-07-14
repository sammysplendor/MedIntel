import styles from "../styles/components styles/Sidebar.module.css";
import { NavLink } from "react-router-dom";
import { LayoutDashboard } from "lucide-react";

const Sidebar = () => {
  const getLinkClass = ({ isActive }) => {
    isActive ? styles.activeTab : styles.inactiveTab;
  };

  return (
    <nav className={styles.sidebar}>
      <div className={styles.mainTabs}>
        <NavLink to="/Dashboard" className={getLinkClass}>
          <LayoutDashboard className={styles.tabIcon} /> Dashboard
        </NavLink>

        <NavLink to="/Dashboard" className={getLinkClass}>
          <LayoutDashboard className={styles.tabIcon} /> Disease Trends
        </NavLink>

        <NavLink to="/Dashboard" className={getLinkClass}>
          <LayoutDashboard className={styles.tabIcon} /> Countries
        </NavLink>

        <NavLink to="/Dashboard" className={getLinkClass}>
          <LayoutDashboard className={styles.tabIcon} /> Vaccinations
        </NavLink>

        <NavLink to="/Dashboard" className={getLinkClass}>
          <LayoutDashboard className={styles.tabIcon} /> Health News
        </NavLink>
      </div>

      <div className={styles.footerTabs}>
        <NavLink to="/Dashboard" className={getLinkClass}>
          <LayoutDashboard className={styles.tabIcon} /> Logout
        </NavLink>
      </div>
    </nav>
  );
};

export default Sidebar;
