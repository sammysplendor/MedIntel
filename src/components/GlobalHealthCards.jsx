import styles from "../styles/components styles/GlobalHealthCards.module.css";
import { AlertCircle, Globe, Rat, Syringe } from "lucide-react";

const GlobalHealthCards = () => {
  return (
    <section className={styles.cardsContainer}>
      <div className={styles.card}>
        <p>
          <Globe className={styles.cardIcon} /> Countries Reporting Cases
        </p>

        <h2>195</h2>

        <small className={styles.trends}>5.2% from last week</small>
      </div>

      <div className={styles.card}>
        <p>
          <Rat className={styles.cardIcon} /> Reported Disease Cases
        </p>

        <h2>195</h2>

        <small className={styles.trends}>5.2% from last week</small>
      </div>

      <div className={styles.card}>
        <p>
          <Syringe className={styles.cardIcon} /> Vaccination Coverage
        </p>

        <h2>195</h2>

        <small className={styles.trends}>5.2% from last week</small>
      </div>

      <div className={styles.card}>
        <p>
          <AlertCircle className={styles.cardIcon} /> Active Health Alerts
        </p>

        <h2>195</h2>

        <small className={styles.trends}>5.2% from last week</small>
      </div>
    </section>
  );
};

export default GlobalHealthCards;
