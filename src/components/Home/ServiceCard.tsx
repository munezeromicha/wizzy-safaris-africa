import React from "react";
import { useNavigate } from "react-router-dom";

type ServiceCardProps = {
  title: string;
  imageSrc: string;
  buttonLabel: string;
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  imageSrc,
  buttonLabel,
}) => {
  const navigate = useNavigate();
  const handleNavigation = () => {
    switch (title) {
      case "Tourism":
        navigate("/Tourism");
        break;
      case "Gorilla Permits":
        navigate("/gorilla-permit");
        break;
      case "Hotel Reservation":
        navigate("/hotel-reservation");
        break;
      case "Car Rental":
        navigate("/car-rental");
        break;
      default:
        navigate("/");
    }
  };

  return (
    <div className="relative">
      <img src={imageSrc} alt={title} className="object-cover w-full h-full" />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-between p-4">
        <h2 className="text-white text-2xl font-bold">{title}</h2>
        <button onClick={handleNavigation} className="bg-[#8A5624] text-white px-4 py-2 rounded-lg">
          {buttonLabel}
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;