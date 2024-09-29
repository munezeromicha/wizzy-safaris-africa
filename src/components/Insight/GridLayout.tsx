import React from "react";
import image1 from "../../assets/Images/Hot-Air-Balloon.jpg";
import image2 from "../../assets/Images/KWITA-IZINA.jpg";
import image3 from "../../assets/Images/africaEast.jpg";
import image4 from "../../assets/Images/Tea.jpg";

interface CardProps {
  image: string;
  title: string;
  date: string;
}

const Card: React.FC<CardProps> = ({ image, title, date }) => {
  return (
    <div className="relative bg-gray-100 shadow-lg rounded-lg overflow-hidden group w-[70%]">
      <img
        src={image}
        alt={title}
        className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
      />

      <div className="absolute top-3 left-3 bg-white bg-opacity-70 px-3 py-1 rounded-lg shadow-md">
        <span className="text-sm font-bold text-gray-900">{date}</span>
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <button className="mt-2 inline-block px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-sm font-medium rounded-lg">
          Read More
        </button>
      </div>
    </div>
  );
};

const GridLayout: React.FC = () => {
  const cards = [
    {
      image: image1,
      title: "AKAGERA NATIONAL PARK, RWANDA",
      date: "September 6, 2024",
    },
    {
      image: image3,
      title: "EAST AFRICA’S 10 BEST TRAVEL DESTINATIONS",
      date: "September 3, 2024",
    },
    {
      image: image4,
      title: "GISAKURA TEA PLANTATION AROUND NYUNGWE NATIONAL PARK",
      date: "August 27, 2024",
    },
    {
      image: image2,
      title: "KWITA IZINA/GORILLA NAMING CEREMONY IN RWANDA",
      date: "August 20, 2024",
    },
  ];

  return (
    <div className=" pl-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
        {cards.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            date={card.date}
          />
        ))}
      </div>
    </div>
  );
};

export default GridLayout;
