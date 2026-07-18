import { useEffect, useState } from "react";
import {
  getCountries,
  getHealthExpenditure,
  getInfantMortality,
  getLifeExpectancy,
} from "../api/worldbankApi";

const useDashboardKPI = () => {
  const [KPIData, setKPIData] = useState({
    countries: [],
    lifeExpectancy: "",
    infantMortality: "",
    healthExpenditure: "",
  });

  useEffect(() => {
    const fetchAllKPIData = async () => {
      try {
        const [
          countriesResponse,
          lifeExpectancyResponse,
          infantMortalityResponse,
          healthExpenditureResponse,
        ] = await Promise.all([
          getCountries(),
          getLifeExpectancy(),
          getInfantMortality(),
          getHealthExpenditure(),
        ]);

        console.log({
          countries: countriesResponse,
          lifeExpectancy: lifeExpectancyResponse,
          infantMortality: infantMortalityResponse,
          healthExpenditure: healthExpenditureResponse,
        });

        setKPIData({
          countries: countriesResponse,
          lifeExpectancy: lifeExpectancyResponse,
          infantMortality: infantMortalityResponse,
          healthExpenditure: healthExpenditureResponse,
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
