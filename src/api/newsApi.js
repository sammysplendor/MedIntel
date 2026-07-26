import { newsApi } from "./axiosInstance";

export const getHealthNews = async () => {
  const cachedNews = JSON.parse(localStorage.getItem("health_news"));

  const TEN_MINUTES = 10 * 60 * 1000;

  if (cachedNews && Date.now() - cachedNews.timestamp < TEN_MINUTES) {
    return cachedNews.data;
  }

  try {
    const response = await newsApi.get("/top-headlines", {
      params: {
        category: "health",
        lang: "en",
        max: 10,
      },
    });
    localStorage.setItem(
      "health_news",
      JSON.stringify({
        timestamp: Date.now(),
        data: response.data,
      }),
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching health news data:", error);
    return [];
  }
};
