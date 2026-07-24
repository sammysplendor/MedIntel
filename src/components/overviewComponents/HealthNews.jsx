import styles from "../../styles/components styles/overview/HealthNews.module.css";
import NewsCard from "./NewsCard";
import { useState, useEffect } from "react";
import { getHealthNews } from "../../api/newsApi";

const HealthNews = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const newsArticles = await getHealthNews();

      const uniqueArticles = newsArticles?.filter(
        (article, index, self) =>
          index === self.findIndex((a) => a.title === article.title),
      );
      console.log(uniqueArticles);

      setNews(uniqueArticles || []);
    };

    fetchNews();
  }, []);
  return (
    <section className={styles.sectionContainer}>
      <div className={styles.heading}>
        <h3>Global Health Intelligence</h3>
        <p>
          Latest outbreaks, medical breakthroughs, policy updates, and public
          health alerts from around the world.
        </p>
      </div>

      <div className={styles.sectionContent}>
        {news?.map((article) => (
          <NewsCard key={article.id} article={article} />
        ))}
      </div>
    </section>
  );
};

export default HealthNews;
