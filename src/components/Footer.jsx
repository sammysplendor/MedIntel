import styles from "../styles/components styles/Footer.module.css";
import medintelLogo from "../assets/medintel_logo.png";
import { Globe, Newspaper } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className={styles.top}>
        <img src={medintelLogo} alt="MedIntel logo" width={200} height={150} />

        <p className={styles.description}>
          Real-time global health intelligence powered by trusted public health
          data.
        </p>
      </div>

      <div className={styles.sourcesContainer}>
        <h5>Data Sources:</h5>

        <div className={styles.sources}>
          <p>
            <Globe className={styles.sourceIcon} /> World Bank
          </p>
          <p>
            <Newspaper className={styles.sourceIcon} /> GNews
          </p>
        </div>
      </div>

      <div className={styles.bottom}>
        <small>&copy; {currentYear} MedIntel</small>
        <small>Powered by React & trusted public health data.</small>
      </div>
    </footer>
  );
};

export default Footer;
