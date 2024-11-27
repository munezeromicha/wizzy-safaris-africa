import React from "react";
import NewsCard from "./NewsCard";
import masai from "../../assets/Images/Masai.jpg"
import img1 from "../../assets/Images/GorillaMountain.jpg"
import img2 from "../../assets/Images/africaEast.jpg"
const newsData = [
  {
    title: "AKAGERA NATIONAL PARK, RWANDA",
    date: "September 6, 2024",
    imageUrl: masai,
  },
  {
    title: "EAST AFRICA'S 10 BEST TRAVEL DESTINATIONS",
    date: "September 3, 2024",
    imageUrl: img2,
  },
  {
    title: "GORILLA TREKKING ADVENTURE IN RWANDA",
    date: "August 29, 2024",
    imageUrl: img1,
  },
];

const TravelNewsSection: React.FC = () => {
  return (
    <section className="py-16 bg-beige-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-brown-700">
            Travel News & Updates
          </h2>
          <p className="mt-2 text-brown-600">Travel information</p>
        </div>
        <div className="mt-12 grid gap-2 grid-cols-2 sm:grid-cols-3 lg:grid-cols-3">
          {newsData.map((newsItem, index) => (
            <NewsCard
              key={index}
              title={newsItem.title}
              date={newsItem.date}
              imageUrl={newsItem.imageUrl} link={""} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <button className="px-8 py-3 bg-brown-600 text-white rounded-md hover:bg-brown-700">
            More insights
          </button>
        </div>
      </div>
    </section>
  );
};

export default TravelNewsSection;
