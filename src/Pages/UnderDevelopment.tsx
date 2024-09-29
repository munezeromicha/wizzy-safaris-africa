import React from 'react';
import { FaTools } from 'react-icons/fa';
import 'tailwindcss/tailwind.css';

const UnderDevelopment: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#192f33]">
      <FaTools className="text-white text-6xl mb-4" />
      <h1 className="text-white text-2xl md:text-4xl font-bold text-center">
        The Page is Still Under Development !
      </h1>
    </div>
  );
};

export default UnderDevelopment;
