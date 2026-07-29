import styles from "../../styles/features styles/Health_Analytics.module.css";
import Footer from "../../components/Footer";
import { indicatorOptions } from "../../utils/indicators";
import { getCountries } from "../../api/worldbankApi";
import { useEffect, useState } from "react";

const Health_Analytics = () => {
  const [countryList, setCountryList] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      const country = await getCountries();

      setCountryList(country.list);
    };
    fetchCountries();
  }, []);

  return (
    <main className="mainContent">
      {/* ========== HEADER SECTION ========== */}

      <section className={styles.pageHeader}>
        <div className={styles.left}>
          <h1>Health Analytics</h1>
          <p>Explore global health indicators across countries</p>
        </div>

        <span className={styles.right}>
          <p>Last updated:</p>
          <p>2025 Data</p>
        </span>
      </section>

      {/* ========== SELECTOR SECTION ========== */}
      <section className={styles.selectors}>
        <select className={styles.selector} name="indicator">
          <option value="Indicator">Indicator</option>

          {indicatorOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <select className={styles.selector} name="country">
          <option value="country">Country</option>

          {countryList.map((country) => (
            <option key={country.id} value={country.id}>
              {country.name}
            </option>
          ))}
        </select>
      </section>

      {/* ===== FOOTER ===== */}
      <Footer />
    </main>
  );
};

export default Health_Analytics;
