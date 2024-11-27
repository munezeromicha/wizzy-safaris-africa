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
      className="absolute top-22 left-6 bg-[#21140b] p-6 rounded-full shadow-md hover:bg-green-600 transition"
    >
      <FaArrowLeft className="text-white" />
    </button>
    
      <h1 className='text-3xl md:text-4xl font-bold text-black mb-6'>Country Details</h1>
      <img src={image} alt='' className='w-[70vw] h-[80vh]  mb-8'/>
      {description ? (
        <p className='text-black text-start w-[70vw] text-center'>{description}</p>
      ) : (
        <p>No description available.</p>
      )}
    </div>
    
  );
};

export default CountryContents;
