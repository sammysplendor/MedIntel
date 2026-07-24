import { newsApi } from "./axiosInstance";

export const getHealthNews = async (
  query = "(WHO OR CDC OR vaccine OR outbreak OR diabetes OR sickle cell OR heart OR virus OR blood OR cancer OR malaria OR diagnosis OR laboratory OR drug)",
) => {
  const cachedNews = localStorage.getItem("health_news");
  if (cachedNews) {
    return JSON.parse(cachedNews);
  }

  try {
    const response = await newsApi.get("/search", {
      params: {
        q: query,
        lang: "en",
        max: 10,
      },
    });
    localStorage.setItem("health_news", JSON.stringify(response.data.articles));
    console.log(response.data);

    return response.data.articles;
  } catch (error) {
    console.error("Error fetching health news data:", error);
  }
};
