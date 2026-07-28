import styles from "../styles/components styles/Sidebar.module.css";
import { NavLink } from "react-router-dom";
import {
  Globe,
  LayoutDashboard,
  LogOut,
  Newspaper,
  Syringe,
  TrendingUpDownIcon,
} from "lucide-react";

const Sidebar = () => {
  const getLinkClass = ({ isActive }) => {
    return isActive ? styles.activeTab : styles.inactiveTab;
  };

  return (
    <nav className={styles.sidebar}>
      <div className={styles.mainTabs}>
        <NavLink to="/Dashboard" className={getLinkClass} end>
          <LayoutDashboard className={styles.tabIcon} /> Dashboard
        </NavLink>

        <NavLink to="Health_Analytics" className={getLinkClass}>
          <TrendingUpDownIcon className={styles.tabIcon} /> Health Analytics
        </NavLink>

        <NavLink to="Countries" className={getLinkClass}>
          <Globe className={styles.tabIcon} /> Countries
        </NavLink>

        <NavLink to="Vaccinations" className={getLinkClass}>
          <Syringe className={styles.tabIcon} /> Vaccinations
        </NavLink>

        <NavLink to="Health_news" className={getLinkClass}>
          <Newspaper className={styles.tabIcon} /> Health News
        </NavLink>
      </div>

      <div className={styles.footerTabs}>
        <NavLink to="Logout" className={getLinkClass}>
          <LogOut className={styles.tabIcon} /> Logout
        </NavLink>
      </div>
    </nav>
  );
};

export default Sidebar;
