import useDashboardKPI from "../hooks/useDashboardKPI";
import styles from "../styles/components styles/GlobalHealthCards.module.css";
import { Baby, Globe, HeartPulse, Hospital } from "lucide-react";

const GlobalHealthCards = () => {
  const { KPIData } = useDashboardKPI();

  return (
    <section className={styles.cardsContainer}>
      <div className={styles.card}>
        <p>
          <Globe className={styles.cardIcon} /> Countries & Economies Events
        </p>

        <h2>{KPIData.countries}</h2>

        <small className={styles.cardFooter}>World Bank Coverage</small>
      </div>

      <div className={styles.card}>
        <p>
          <HeartPulse className={styles.cardIcon} /> Global Life Expectancy
        </p>

        <h2>{KPIData.lifeExpectancy}</h2>

        <small className={styles.cardFooter}>Latest Global Estimate</small>
      </div>

      <div className={styles.card}>
        <p>
          <Baby className={styles.cardIcon} /> Infant Mortality
        </p>

        <h2>195</h2>

        <small className={styles.cardFooter}>per 1,000 Live Births</small>
      </div>

      <div className={styles.card}>
        <p>
          <Hospital className={styles.cardIcon} /> Health Expenditure
        </p>

        <h2>195</h2>

        <small className={styles.cardFooter}>of GDP</small>
      </div>
    </section>
  );
};

export default GlobalHealthCards;
