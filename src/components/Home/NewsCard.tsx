import React from "react";

interface NewsCardProps {
  title: string;
  date: string;
  imageUrl: string;
  link: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ title, date, imageUrl, link }) => {
  return (
    <div className="max-w-sm bg-white rounded-lg shadow-lg overflow-hidden">
      <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm bg-gray-200 px-2 py-1 rounded-md text-gray-700 font-medium">
            {date}
          </span>
        </div>
        <h3 className="text-lg font-bold text-gray-900">{title}</h3>
        <a
          href={link}
          className="inline-block mt-4 text-orange-500 font-semibold hover:text-orange-600"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
