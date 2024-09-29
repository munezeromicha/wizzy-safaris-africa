import React from "react";
import { useNavigate } from "react-router-dom";
interface TourCardProps {
  title: string;
  location: string;
  days: string;
  image: string;
}

const TourCard: React.FC<TourCardProps> = ({
  title,
  location,
  days,
  image,
}) => {
  const navigate = useNavigate();
  const handleNavigation = ()=> {
  navigate('/underDevelopment')
  }
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold text-lg text-[#6d4625]">{title}</h3>
        <p className="text-[#6d4625]">{location}</p>
        <div className="flex justify-between items-center mt-3">
          <button onClick={handleNavigation} className="bg-[#6d4625] text-white py-1 px-3 rounded hover:bg-brown-700">
            Learn More
          </button>
          <span className="text-gray-400 text-sm">{days}</span>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
