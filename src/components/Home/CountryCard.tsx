import React from "react";
import { useNavigate } from "react-router-dom";
interface CountryCardProps {
  country: string;
  tours: number;
  image: string;
  description: string;
}

const CountryCard: React.FC<CountryCardProps> = ({
  country,
  tours,
  image,
  description,
}) => {
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate("/countryContents", { state: { image, description } });
  };
  return (
    <div className="relative rounded-lg overflow-hidden shadow-lg hover:scale-105 transition transform duration-300 ease-in-out">
      <img
        src={image}
        alt={`${country} tour`}
        className="w-full h-48 object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-between">
        <h3 className="text-white text-lg font-semibold m-4">{country}</h3>
        <button
          onClick={handleNavigation}
          className="bg-[#8A5624] text-white font-semibold py-1 px-3 rounded m-4"
        >
          {tours} Tours
        </button>
      </div>
    </div>
  );
};

export default CountryCard;
