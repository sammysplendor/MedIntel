import { useEffect, useState } from "react";
import { getCountries, getLifeExpectancy } from "../api/worldbankApi";

const useDashboardKPI = () => {
  //   const [countries, setCountries] = useState([]);
  const [KPIData, setKPIData] = useState({
    countries: [],
    lifeExpectancy: "",
  });

  useEffect(() => {
    // const fetchCountries = async () => {
    //   try {
    //     const countries = await getCountries();

    //     console.log(countries);
    //     setCountries(countries);
    //   } catch (error) {
    //     console.error("Error in hook fetching countries:", error);
    //   }
    // };

    // fetchCountries();

    const fetchAllKPIData = async () => {
      try {
        const [countriesResponse, lifeExpectancyResponse] = await Promise.all([
          getCountries(),
          getLifeExpectancy(),
        ]);

        console.log({
          countries: countriesResponse,
          lifeExpectancy: lifeExpectancyResponse,
        });

        setKPIData({
          countries: countriesResponse,
          lifeExpectancy: lifeExpectancyResponse,
        });
      } catch (error) {
        console.error("Error in hook fetching all KPI data:", error);
      }
    };

    fetchAllKPIData();
  }, []);

  return { KPIData };
};

export default useDashboardKPI;
