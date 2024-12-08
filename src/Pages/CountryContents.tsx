import React from 'react';
import { FaArrowLeft } from "react-icons/fa";
import 'tailwindcss/tailwind.css';
import { useLocation } from "react-router-dom";

const CountryContents: React.FC = () => {
    const location = useLocation();
    const { image, description } = location.state || {};
    
  const goBack = () => {
    window.history.back(); 
  };
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-white p-4">
      <button
        onClick={goBack}
        className="absolute top-4 sm:top-8 md:top-12 left-4 sm:left-6 bg-[#21140b] p-3 sm:p-4 md:p-6 rounded-full shadow-md hover:bg-green-600 transition"
      >
        <FaArrowLeft className="text-white text-sm sm:text-base md:text-lg" />
      </button>
      
      <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 sm:mb-6 md:mb-8 mt-12 sm:mt-16'>
        Country Details
      </h1>

      <div className='w-[90vw] sm:w-[80vw] md:w-[70vw] max-w-6xl mx-auto'>
        <img 
          src={image} 
          alt='' 
          className='w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] object-cover object-center mb-4 sm:mb-6 md:mb-8 rounded-lg shadow-lg'
        />
        
        {description ? (
          <p className='text-black text-sm sm:text-base md:text-lg text-start w-[70vw]  px-4 sm:px-6 md:px-8 max-w-4xl mx-auto'>
            {description}
          </p>
        ) : (
          <p className='text-sm sm:text-base md:text-lg'>No description available.</p>
        )}
      </div>
    </div>
  );
};

export default CountryContents;
