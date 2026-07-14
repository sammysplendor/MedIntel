import styles from "../styles/components styles/TopNav.module.css";
import { Link } from "react-router-dom";
import medintelLogo from "../assets/medintel_logo.png";
import { Search, User } from "lucide-react";

const TopNav = () => {
  return (
    <nav className={styles.topNav}>
      <Link to="">
        <img src={medintelLogo} alt="MedIntel logo" width={150} />
      </Link>

      <div className={styles.searchBar}>
        <Search className={styles.searchIcon} />{" "}
        <input
          type="text"
          className="searchInput"
          placeholder="Search here..."
        />
      </div>

      <Link to="">
        <User className={styles.avatar} />
      </Link>
    </nav>
  );
};

export default TopNav;
