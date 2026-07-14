import styles from "../../styles/features styles/Overview.module.css";
import { formatedDate, getGreeting } from "../../utils/dateUtils";

const Overview = () => {
  return (
    <main className="mainContent">
      {/* ========== Header section ========== */}
      <section className={styles.welcomeHeader}>
        <h3>{getGreeting()}, Samuel</h3>

        <div className={styles.heading}>
          <h1>Global Health Overview</h1>
          <p>
            Stay updated with worldwide disease surveillance, vaccination
            coverage and public health indicators.
          </p>
        </div>

        <small className={styles.currentDate}>{formatedDate()}</small>
      </section>
    </main>
  );
};

export default Overview;
