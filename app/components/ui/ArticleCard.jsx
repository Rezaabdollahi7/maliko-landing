import Image from "next/image";

const ArticleCard = ({ article }) => {
  return (
    <div className="bg-white rounded-2xl border-2 border-gray-200 hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <div className="relative h-48">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover rounded-t-2xl"
        />
      </div>
      <div className="p-6">
        <h3 className="font-bold text-xl text-gray-900 mb-2 leading-relaxed">
          {article.title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {article.excerpt}
        </p>
        <div className="flex justify-between items-center text-gray-500 text-xs">
          <span>{article.author}</span>
          <span>{article.date}</span>
        </div>
      </div>
    </div>
  );
};
export default ArticleCard;
