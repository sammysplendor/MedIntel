import { newsApi } from "./axiosInstance";

export const getHealthNews = async () => {
  const cachedNews = localStorage.getItem("health_news");
  if (cachedNews) {
    return JSON.parse(cachedNews);
  }

  try {
    const response = await newsApi.get("/top-headlines", {
      params: {
        category: "health",
        lang: "en",
        max: 10,
      },
    });
    localStorage.setItem("health_news", JSON.stringify(response.data));

    return response.data;
  } catch (error) {
    console.error("Error fetching health news data:", error);
    return [];
  }
};
