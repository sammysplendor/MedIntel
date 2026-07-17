import styles from "../../styles/features styles/Overview.module.css";
import { formatedDate, getGreeting } from "../../utils/dateUtils";
import GlobalHealthCards from "../../components/GlobalHealthCards";

const Overview = () => {
  const session = JSON.parse(localStorage.getItem("userSession"));

  const userName = session.name.split(" ")[0] || "Guest";

  return (
    <main className="mainContent">
      {/* ========== Header section ========== */}
      <section className={styles.welcomeHeader}>
        <h4>
          {getGreeting()}, {userName}
        </h4>

        <div className={styles.heading}>
          <h1>Global Health Overview</h1>
          <p>
            Stay updated with worldwide disease surveillance, vaccination
            coverage and public health indicators.
          </p>
        </div>

        <small className={styles.currentDate}>{formatedDate()}</small>
      </section>

      {/* ========== Global Health Cards section ========== */}
      <GlobalHealthCards />
    </main>
  );
};

export default Overview;
