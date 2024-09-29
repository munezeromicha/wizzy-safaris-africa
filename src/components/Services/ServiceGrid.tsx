import React, { useState, useEffect } from "react";
import image from "../../assets/Images/IMG-20240928-WA0093.jpg";
import cars from "../../assets/Images/car2.jpg";
import accomodation from "../../assets/Images/WhatsApp Image 2024-09-28 at 11.56.01_9f0d9e84.jpg";
import gorilla from "../../assets/Images/IMG-20240928-WA0096.jpg";
import { FaArrowCircleUp } from "react-icons/fa";

interface ServiceItem {
  imageSrc: string;
  title: string;
  description: string;
}

const services: ServiceItem[] = [
  {
    imageSrc: image,
    title: "Tourism",
    description:
      "Explore the stunning landscapes and vibrant culture of our country! Embark on guided tours through breathtaking scenery, indulge in delicious local cuisine, and immerse yourself in unforgettable views that will leave you in awe! Adventure, discovery, and excitement await at every turn!",
  },
  {
    imageSrc: cars,
    title: "Car Rental In Rwanda",
    description:
      "Unlock the freedom to explore Rwanda's breathtaking scenery at your own pace by renting the perfect car today! From the lush hills to the vibrant cities, experience every corner of the country in ultimate comfort and style. Whether you're seeking a rugged SUV for off-road adventures, a spacious family van, or a sleek luxury vehicle to travel in elegance, we have got you covered.With our easy and quick booking process, you can be behind the wheel in no time! Don't let your dream journey wait—choose from our top-notch fleet and start your adventure right now. Rent today, drive tomorrow, and make unforgettable memories across Rwanda's most stunning landscapes!",
  },
  {
    imageSrc: gorilla,
    title: "Gorilla Permit",
    description:
      "Embark on the adventure of a lifetime and witness the majestic mountain gorillas in their natural habitat! Feel the excitement as you trek through Rwanda's lush rainforests and come face-to-face with these gentle giants. This rare, awe-inspiring experience is unlike any other and promises memories that will last forever. Do not miss your chance to be part of this extraordinary journey—book your gorilla trek today and make it a moment you will never forget!",
  },
  {
    imageSrc: accomodation,
    title: "Accommodation",
    description:
      "Discover the ideal accommodations for your unforgettable visit, offering a range of options from luxurious hotels to cozy lodges. Immerse yourself in comfort and exceptional hospitality right in the heart of nature. Whether you are seeking a serene escape or an adventurous stay, our handpicked selection ensures you will find the perfect haven to relax and recharge. Do not just visit—experience the warmth of our hospitality and the beauty of your surroundings. Book your stay today and make your trip truly special!",
  },
];

const ServiceGrid: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(
    null
  );
  const [scales, setScales] = useState<number[]>(
    Array(services.length).fill(1)
  );
  const [iconScales, setIconScales] = useState<number[]>(
    Array(services.length).fill(1)
  );

  useEffect(() => {
    const intervals = services.map((_, index) => {
      return setInterval(() => {
        setScales((prevScales) => {
          const newScales = [...prevScales];
          newScales[index] = newScales[index] === 1 ? 1.05 : 1;
          return newScales;
        });
        setIconScales((prevIconScales) => {
          const newIconScales = [...prevIconScales];
          newIconScales[index] = newIconScales[index] === 1 ? 1.2 : 1;
          return newIconScales;
        });
      }, 3000 + index * 1000);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  const handleCardClick = (service: ServiceItem) => {
    setSelectedService(service);
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
    setSelectedService(null);
  };

  return (
    <div className="w-full py-12 px-6 bg-[#01190d]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="text-center relative"
            style={{
              transform: `scale(${scales[index]})`,
              transition: "transform 0.3s",
            }}
            onClick={() => handleCardClick(service)}
          >
            <img
              src={service.imageSrc}
              alt={service.title}
              className="w-full h-64 object-cover mb-4"
            />
            <h3 className="text-white text-lg font-semibold">
              {service.title}
            </h3>
            <FaArrowCircleUp
              className="absolute top-2 right-2 text-[#192f33] text-2xl"
              style={{
                transform: `scale(${iconScales[index]})`,
                transition: "transform 0.3s",
              }}
            />
          </div>
        ))}
      </div>

      {isOpen && selectedService && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded max-w-md w-full">
            <h2 className="text-lg font-bold">{selectedService.title}</h2>
            <img
              src={selectedService.imageSrc}
              alt={selectedService.title}
              className="w-full h-64 object-cover mb-4"
            />
            <div className="max-h-48 overflow-y-auto">
              <p className="text-gray-700 mb-4">
                {selectedService.description}
              </p>
            </div>
            <button
              onClick={closePopup}
              className="mt-2 bg-red-500 text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceGrid;
