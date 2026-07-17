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
      `/country/WRD/${INDICATORS.LIFE_EXPECTANCY}`,
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching life expectancy:", error);
  }
};
