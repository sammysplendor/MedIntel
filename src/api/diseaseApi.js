import { diseaseApi } from "./axiosInstance";

export const getDiseaseCases = async () => {
  try {
    const response = await diseaseApi.get("/all");
    return response.data;
  } catch (error) {
    console.error("Error fetching disease cases:", error);
    return [];
  }
};
