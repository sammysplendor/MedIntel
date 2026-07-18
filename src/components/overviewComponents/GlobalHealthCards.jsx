import useDashboardKPI from "../../hooks/useDashboardKPI";
import styles from "../../styles/components styles/overview/GlobalHealthCards.module.css";
import { Baby, Globe, HeartPulse, Hospital } from "lucide-react";

const GlobalHealthCards = () => {
  const { KPIData } = useDashboardKPI();

  // ===== EXTRACT THE VALUES ===== //
  // ----- The timelines
  const lifeTimeline = KPIData.lifeExpectancy || [];
  const infantTimeline = KPIData.infantMortality || [];
  const expenditureTimeline = KPIData.healthExpenditure || [];

  // ----- The latest records
  const latestLifeExpectancyRecord = lifeTimeline.find(
    (item) => item.value !== null,
  );
  const latestInfantMortalityRecord = infantTimeline.find(
    (item) => item.value !== null,
  );
  const latestExpenditureRecord = expenditureTimeline.find(
    (item) => item.value !== null,
  );

  // ----- The values
  const lifeExpectancyValue = latestLifeExpectancyRecord
    ? `${latestLifeExpectancyRecord.value.toFixed(1)} years`
    : "N/A";
  const lifeYear = latestLifeExpectancyRecord
    ? latestLifeExpectancyRecord.date
    : "";

  const infantMortalityValue = latestInfantMortalityRecord
    ? latestInfantMortalityRecord.value
    : "N/A";
  const infantYear = latestInfantMortalityRecord
    ? latestInfantMortalityRecord.date
    : "";

  const expenditureValue = latestExpenditureRecord
    ? `${latestExpenditureRecord.value.toFixed(1)}%`
    : "N/A";

  return (
    <section className={styles.cardsContainer}>
      {/* ----- Card 1 ----- */}
      <div className={styles.card}>
        <p>
          <Globe className={styles.cardIcon} /> Countries & Economies Events
        </p>

        <h2>{KPIData.countries}</h2>

        <small className={styles.cardFooter}>World Bank Coverage</small>
      </div>

      {/* ----- Card 2 ----- */}
      <div className={styles.card}>
        <p>
          <HeartPulse className={styles.cardIcon} /> Global Life Expectancy
        </p>

        <h2>{lifeExpectancyValue}</h2>

        <small className={styles.cardFooter}>As of {lifeYear} (World)</small>
      </div>

      {/* ----- Card 3 ----- */}
      <div className={styles.card}>
        <p>
          <Baby className={styles.cardIcon} /> Infant Mortality
        </p>

        <h2>{infantMortalityValue}</h2>

        <small className={styles.cardFooter}>
          per 1,000 Live Births ({infantYear})
        </small>
      </div>

      {/* ----- Card 4 ----- */}
      <div className={styles.card}>
        <p>
          <Hospital className={styles.cardIcon} /> Health Expenditure
        </p>

        <h2>{expenditureValue}</h2>

        <small className={styles.cardFooter}>of Global GDP</small>
      </div>
    </section>
  );
};

export default GlobalHealthCards;
