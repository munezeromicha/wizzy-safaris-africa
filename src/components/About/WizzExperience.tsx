import React from "react";
import image from "../../assets/Images/IMG-20240928-WA0093.jpg";
import gorilla from "../../assets/Images/gorilla.webp";

const WizzExperience: React.FC = () => {
  return (
    <div className="flex flex-col items-center md:flex-row md:items-center px-4 py-8 ">
      <div className="md:w-1/2 space-y-8">
        <div>
          <h2 className="text-4xl font-bold text-brown-800">
            Tailored Experiences
          </h2>
          <p className="text-gray-600 mt-4 ">
            Africa Wizzy Safaris offers tailored experiences in Africa that
            cater specifically to individuals with disabilities. These safaris
            are designed to ensure accessibility and comfort, providing
            opportunities to explore the diverse landscapes and wildlife of the
            continent.
          </p>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-brown-800">
            Luxury Meets Authenticity
          </h2>
          <p className="text-gray-600 mt-4">
            Africa Wizzy Safaris embodies the essence of luxury meeting
            authenticity in Africa by curating experiences that offer both
            high-end comfort and genuine cultural immersion.
          </p>
        </div>
      </div>

      <div className="md:w-1/2 mt-8 md:mt-0 md:pl-8 flex flex-col space-y-4">
        <div className="relative">
          <img
            src={image}
            alt="Safari Guide"
            className="rounded-lg shadow-lg w-1/2"
          />
        </div>
        <div className="relative">
          <img
            src={gorilla}
            alt="Tourist on safari"
            className="rounded-lg shadow-lg w-1/2"
          />
        </div>
      </div>
    </div>
  );
};

export default WizzExperience;
