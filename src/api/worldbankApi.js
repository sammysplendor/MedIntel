import { INDICATORS } from "../utils/indicators";
import { worldbankApi } from "./axiosInstance";

export const getCountries = async () => {
  try {
    const response = await worldbankApi.get("/country/");

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
