import styles from "../../styles/features styles/Health_Analytics.module.css";
import Footer from "../../components/Footer";
import { indicatorOptions } from "../../utils/indicators";
import { getCountries } from "../../api/worldbankApi";
import { useEffect, useState } from "react";
import InfoCard from "../../components/healthAnalyticsComponents/InfoCard";
import useHealthAnalytics from "../../hooks/useHealthAnalytics";

const Health_Analytics = () => {
  // ===== Setting states
  const [countryList, setCountryList] = useState([]);
  const [typedCountryName, setTypedCountryName] = useState("");
  const [selectedCountryCode, setSelectedCountryCode] = useState("");
  const [selectedIndicator, setSelectedIndicator] = useState(
    indicatorOptions[0].code,
  );

  const { error, loading, records, latestRecord } = useHealthAnalytics(
    selectedCountryCode,
    selectedIndicator.code,
  );

  // ===== Fetch countries
  useEffect(() => {
    const fetchCountries = async () => {
      const country = await getCountries();

      setCountryList(country.list);
    };
    fetchCountries();
  }, []);

  // ===== Handle selectors
  const handleIndicator = (e) => {
    const selected = indicatorOptions.find(
      (indicator) => indicator.value === e.target.value,
    );
    setSelectedIndicator(selected);
  };

  const handleCountryChange = (e) => {
    const inputValue = e.target.value;
    setTypedCountryName(inputValue);

    // Check if the typed value matches a full country name in our list
    const matchedCountry = countryList.find(
      (item) => item.name.toLowerCase() === inputValue.trim().toLowerCase(),
    );

    if (matchedCountry) {
      setSelectedCountryCode(matchedCountry.id);
    }
  };

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

      {/* ========== FILTER SECTION ========== */}
      <section className={styles.selectors}>
        {/* ----- Indicator ----- */}
        <select
          className={styles.selector}
          name="indicator"
          value={selectedIndicator.code}
          onChange={handleIndicator}
        >
          <option value="Indicator">Indicator</option>

          {indicatorOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        {/* ----- Country ----- */}
        <input
          type="text"
          list="country-options"
          placeholder="Choose or type a country"
          className={styles.countrySearch}
          value={typedCountryName}
          onChange={handleCountryChange}
        />

        <datalist id="country-options">
          {countryList.map((country) => (
            <option key={country.id} value={country.name} />
          ))}
        </datalist>

        {/* ----- Time Range ----- */}
        <select className={styles.selector} name="time_range">
          <option value="time range">Time Range</option>
          <option value={10}>10 Years</option>
          <option value={20}>20 Years</option>
          <option value={30}>30 Years</option>
        </select>
      </section>

      {/* ====== INFORMATION CARD SECTION ===== */}
      <InfoCard
        indicator={selectedIndicator}
        countryName={typedCountryName}
        latestRecord={latestRecord}
        loading={loading}
      />

      {/* ===== FOOTER ===== */}
      <Footer />
    </main>
  );
};

export default Health_Analytics;
