import React from "react";
interface TourCardProps {
  title: string;
  location: string;
  days: string;
  image: string;
  description: string;
  price: string;
}

const TourCard: React.FC<TourCardProps> = ({
  title,
  location,
  days,
  image,
  description,
  price,
}) => {

  return (
    <div className="relative h-[400px] group">
      <img src={image} alt={title} className="w-full h-64 object-cover rounded-t" />
      
      {/* Default View */}
      <div className="p-4 bg-white rounded-b">
        <h3 className="text-l  text-black mb-2">{title}</h3>
        <p className="text-gray-600">{location}</p>
        <p className="text-gray-600">{days}</p>
      </div>

      {/* Hover View */}
      <div className="absolute inset-0 bg-black bg-opacity-75 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center p-6">
        <p className="text-white mb-4">{description}</p>
        <p className="text-[#c0703b] font-bold text-lg">{price}</p>
        <button className="mt-4 bg-[#c0703b] text-white py-2 px-4 rounded hover:bg-[#21140b]">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default TourCard;
