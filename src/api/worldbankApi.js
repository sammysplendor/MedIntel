import { INDICATORS } from "../utils/indicators";
import { worldbankApi } from "./axiosInstance";

export const getCountries = async () => {
  try {
    const response = await worldbankApi.get("/country");
    console.log(response.data);

    // return response.data[1];
    return {
      total: response.data[0].total,
      list: response.data[1],
    };
  } catch (error) {
    console.error("Error fetching countries:", error);
  }
};

export const getLifeExpectancy = async () => {
  try {
    const response = await worldbankApi.get(
      `/country/WLD/indicator/${INDICATORS.LIFE_EXPECTANCY}`,
    );
    return response.data[1];
  } catch (error) {
    console.error("Error fetching life expectancy:", error);
  }
};

export const getInfantMortality = async () => {
  try {
    const response = await worldbankApi.get(
      `/country/WLD/indicator/${INDICATORS.INFANT_MORTALITY}`,
    );
    return response.data[1];
  } catch (error) {
    console.error("Error fetching infant mortality:", error);
  }
};

export const getHealthExpenditure = async () => {
  try {
    const response = await worldbankApi.get(
      `/country/WLD/indicator/${INDICATORS.HEALTH_EXPENDITURE}`,
    );
    return response.data[1];
  } catch (error) {
    console.error("Error fetching health expenditure:", error);
  }
};

export const getCountriesForMap = async () => {
  try {
    const response = await worldbankApi.get("/country");
    return response.data[1];
  } catch (error) {
    console.error("Error fetching countries for map:", error);
  }
};

export const getCountryHealthData = async (countryCode, countryName) => {
  try {
    const [populationResponse, lifeResponse, healthResponse] =
      await Promise.all([
        worldbankApi.get(
          `/country/${countryCode}/indicator/${INDICATORS.POPULATION}`,
        ),
        worldbankApi.get(
          `/country/${countryCode}/indicator/${INDICATORS.LIFE_EXPECTANCY}`,
        ),
        worldbankApi.get(
          `/country/${countryCode}/indicator/${INDICATORS.HEALTH_EXPENDITURE}`,
        ),
      ]);

    const getLatestRecord = (records) => {
      return records.find((item) => item.value !== null)?.value ?? "N/A";
    };

    return {
      name: countryName,
      population: getLatestRecord(populationResponse.data[1]),
      lifeExpectancy: getLatestRecord(lifeResponse.data[1]),
      healthExpenditure: getLatestRecord(healthResponse.data[1]),
    };
  } catch (error) {
    console.error("Error fetching country health data:", error);
  }
};

export const getGlobalHealthData = async (years) => {
  try {
    const [lifeResponse, healthResponse, infantMortalityResponse] =
      await Promise.all([
        worldbankApi.get(
          `/country/WLD/indicator/${INDICATORS.LIFE_EXPECTANCY}`,
        ),
        worldbankApi.get(
          `/country/WLD/indicator/${INDICATORS.HEALTH_EXPENDITURE}`,
        ),
        worldbankApi.get(
          `/country/WLD/indicator/${INDICATORS.INFANT_MORTALITY}`,
        ),
      ]);

    console.log({
      lifeExpectancy: lifeResponse,
      healthExpenditure: healthResponse,
      infantMortality: infantMortalityResponse,
    });

    const lifeData = lifeResponse.data[1];
    const healthData = healthResponse.data[1];
    const infantMortalityData = infantMortalityResponse.data[1];

    const chartData = lifeData.map((item) => {
      const year = item.date;

      const healthItem = healthData.find((h) => h.date === year);
      const infantItem = infantMortalityData.find((i) => i.date === year);

      return {
        year,

        lifeExpectancy: item.value,

        healthExpenditure: healthItem?.value,

        infantMortality: infantItem?.value,
      };
    });

    chartData.sort((a, b) => Number(a.year) - Number(b.year));

    return chartData.slice(-years);
  } catch (error) {
    console.error("Error fetching global health data:", error);
  }
};

export const getIndicatorHistory = async (countryCode, indicatorCode) => {
  try {
    const response = await worldbankApi.get(
      `/country/${countryCode}/indicator/${indicatorCode}`,
    );
    console.log("Fetching for:", countryCode, indicatorCode);
    return response.data[1] ?? [];
  } catch (error) {
    console.error("Error fetching country indicator history:", error);
  }
};
