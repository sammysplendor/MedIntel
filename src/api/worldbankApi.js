import { INDICATORS } from "../utils/indicators";
import { worldbankApi } from "./axiosInstance";

export const getCountries = async () => {
  try {
    const response = await worldbankApi.get("/country");

    return response.data[0].total;
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

    console.log({
      population: populationResponse.data,
      lifeExpectancy: lifeResponse.data,
      healthExpenditure: healthResponse.data,
    });

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
