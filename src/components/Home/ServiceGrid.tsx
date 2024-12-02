import React from "react";
import ServiceCard from "./ServiceCard";
import img1 from "../../assets/Images/IMG-20240928-WA0092.jpg";
import img2 from "../../assets/Images/IMG-20240928-WA0093.jpg";
import img3 from "../../assets/Images/WhatsApp Image 2024-09-28 at 11.56.01_9f0d9e84.jpg";
import img4 from "../../assets/Images/IMG-20240928-WA0105.jpg";

const services = [
  {
    title: "Tourism",
    imageSrc: img2,
    buttonLabel: "Learn More",
  },
  {
    title: "Gorilla Permits",
    imageSrc: img1,
    buttonLabel: "Learn More",
  },
  {
    title: "Hotel Reservation",
    imageSrc: img3,
    buttonLabel: "Learn More",
  },
  {
    title: "Car Rental",
    imageSrc: img4,
    buttonLabel: "Learn More",
  },
];

const ServiceGrid: React.FC = () => {
  return (
    <div className="bg-[#01190d] grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-4 gap-6 px-4 py-8">
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          title={service.title}
          imageSrc={service.imageSrc}
          buttonLabel={service.buttonLabel}
        />
      ))}
    </div>
  );
};

export default ServiceGrid;