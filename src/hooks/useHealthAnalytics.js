import { useEffect, useState } from "react";
import { getIndicatorHistory } from "../api/worldbankApi";

const useHealthAnalytics = (selectedCountry, selectedIndicatorCode) => {
  const [records, setRecords] = useState([]);
  const [latestRecord, setLatestRecord] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHealthAnalytics = async () => {
      setLoading(true);
      try {
        const analytics = await getIndicatorHistory(
          selectedCountry,
          selectedIndicatorCode,
        );

        setRecords(analytics);

        const latest = analytics.find((item) => item.value !== null);
        setLatestRecord(latest);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchHealthAnalytics();
  }, [selectedCountry, selectedIndicatorCode]);

  return { error, loading, records, latestRecord };
};

export default useHealthAnalytics;
