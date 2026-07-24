import { ArrowRight } from "lucide-react";
import { formatPublishedDate } from "../../utils/dateUtils";
import { getNewsBadge } from "../../utils/badge";

const NewsCard = ({ article }) => {
  const badge = getNewsBadge(article.title);
  const articleImage = article.image;

  return (
    <div className="w-full flex flex-col gap-4 bg-surface border-2 border-solid border-border rounded-card p-8">
      <span className="flex items-center gap-4 font-bold text-[1.3rem] text-text-muted">
        {badge}
      </span>

      <img
        src={articleImage}
        alt="Article image"
        className="h-96 object-cover rounded-card"
      />

      <div className="flex flex-col gap-2">
        <h4>{article.title}</h4>
        <small className="text-text-primary">
          Published {formatPublishedDate(article.publishedAt)}
        </small>
        <p>{article.description}</p>
      </div>

      <div className="flex justify-between items-center">
        <span className="text-text-primary font-bold text-[1.2rem]">
          {article.source.name}
        </span>
        <span
          className="text-primary flex items-center gap-1 text-[1.4rem] cursor-pointer transition-transform duration-300 hover:translate-x-2"
          title="Read full news"
        >
          Read More <ArrowRight />
        </span>
      </div>
    </div>
  );
};

export default NewsCard;
