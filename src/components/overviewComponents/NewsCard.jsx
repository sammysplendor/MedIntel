import { ArrowRight } from "lucide-react";
import { formatPublishedDate } from "../../utils/dateUtils";

const NewsCard = ({ article }) => {
  return (
    <div className="w-full flex flex-col gap-4 bg-surface border-2 border-solid border-border rounded-card p-8">
      <span className="flex items-center gap-4 font-bold text-[1.3rem] text-text-muted">
        Outbreak
      </span>

      <img />

      <div className="flex flex-col gap-2">
        <h4>{article.title}</h4>
        <small className="text-text-primary">
          Published {formatPublishedDate(article.publishedAt)}
        </small>
        <p>{article.description}</p>
      </div>

      <div className="flex justify-between items-center">
        <span className="text-text-primary">WHO</span>
        <span className="text-primary flex items-center gap-1 text-[1.4rem] cursor-pointer transition-transform duration-300 hover:translate-x-2">
          Read More <ArrowRight />
        </span>
      </div>
    </div>
  );
};

export default NewsCard;
