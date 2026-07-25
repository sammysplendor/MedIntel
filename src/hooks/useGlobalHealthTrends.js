import { useEffect, useState } from "react";
import { getGlobalHealthData } from "../api/worldbankApi";

const useGlobalHealthTrends = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedYears, setSelectedYears] = useState(20);

  useEffect(() => {
    const loadData = async () => {
      console.log("loadData started");
      setLoading(true);
      const fetchedData = await getGlobalHealthData(selectedYears);

      console.log("Global health data:", fetchedData);
      setData(fetchedData);

      setLoading(false);
    };
    loadData();
  }, [selectedYears]);

  return { data, loading, setSelectedYears };
};

export default useGlobalHealthTrends;
