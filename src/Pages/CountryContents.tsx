import React from 'react';
import 'tailwindcss/tailwind.css';
import { useLocation } from "react-router-dom";

const CountryContents: React.FC = () => {
    const location = useLocation();
    const { image, description } = location.state || {};
  return (
    <div className="flex overflow-y-auto flex-col items-center pt-16 pb-16 h-screen bg-[#21140b] gap-16">
      <h1 className='text-3xl md:text-4xl font-bold text-white'>Country Details</h1>
      <img src={image} alt='' className='w-1/2'/>
      {description ? (
        <p className='text-white text-left w-1/2'>{description}</p>
      ) : (
        <p>No description available.</p>
      )}
    </div>
  );
};

export default CountryContents;
