import React from "react";
import elephant from "../../assets/Images/elephant.jpg"
const HeroBanner: React.FC = () => {
  return (
    <div className="relative h-60 w-full flex items-center justify-center">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src={elephant}
            alt="Elephant Silhouette"
            className="object-cover h-60 w-full opacity-80"
          />
        </div>
        <div className="z-10 text-center text-white">
          <h1 className="text-3xl md:text-4xl font-bold">
            Find Your Next Adventure with Us to Rwanda and Beyond
          </h1>
          <button className="mt-6 px-6 py-2 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
