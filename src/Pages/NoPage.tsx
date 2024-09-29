import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const NoPageFound: React.FC = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <section className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <div className="text-center">
        <FaExclamationTriangle className="text-yellow-500 text-8xl mb-6" />
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-6">
          Oops! The page you're looking for doesn't exist.
        </p>

        <button
          onClick={handleGoHome}
          className="px-6 py-3 bg-yellow-500 text-white font-medium text-lg rounded-lg hover:bg-yellow-600 transition-all duration-300"
        >
          Go Home
        </button>
      </div>
    </section>
  );
};

export default NoPageFound;
