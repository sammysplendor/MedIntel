import NewsCard from "./NewsCard";
import { useState, useEffect } from "react";
import { getHealthNews } from "../../api/newsApi";

const HealthNews = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const newsArticles = await getHealthNews();

      console.log("Full newsApi response:", newsArticles);

      setNews(newsArticles.articles || []);
    };

    fetchNews();
  }, []);
  return (
    <section className="flex flex-col gap-6">
      <div>
        <h3>Global Health Intelligence</h3>
        <p>
          Latest outbreaks, medical breakthroughs, policy updates, and public
          health alerts from around the world.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {news?.map((article) => (
          <NewsCard key={article.id} article={article} />
        ))}
      </div>
    </section>
  );
};

export default HealthNews;
