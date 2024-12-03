import React from "react";
import backgroundVideo from "../../src/assets/Images/VID-20240928-WA0029.mp4";
import { Link } from "react-router-dom";

const HotelReservation: React.FC = () => {
  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="relative min-h-screen">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-50"
      >
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div>

      <div className="relative z-20 container mx-auto px-4 py-8">
        <button
          onClick={goBack}
          className="absolute top-4 left-4 text-white underline bg-green-700 p-3 rounded-full shadow-md hover:bg-green-600 transition"
        >
          Back
        </button>
        <h1 className="text-4xl font-bold mb-8 text-white text-center">Tourism</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full mb-12">
          <div>
            <video 
              src={backgroundVideo} 
              controls
              className="w-full h-[400px] object-cover rounded-lg shadow-lg"
            >
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="bg-white/90 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Africa Wizzy Safaris</h2>
            <p className="text-lg mb-4">
              Discover the wonders of Africa with Africa Wizzy Safaris. We offer 
              unforgettable experiences, from wildlife adventures to cultural 
              explorations, ensuring a unique and enriching journey.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-gray-100 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Wildlife Adventures</h3>
                <ul className="list-disc list-inside">
                  <li>Safari tours</li>
                  <li>Big Five encounters</li>
                  <li>Guided expeditions</li>
                </ul>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Cultural Explorations</h3>
                <ul className="list-disc list-inside">
                  <li>Local traditions</li>
                  <li>Community visits</li>
                  <li>Authentic experiences</li>
                </ul>
              </div>
            </div>
            <Link to="/bookings" className="hover:text-orange-400">
            <button className="bg-[#8A5624] text-white px-6 py-3 rounded-lg hover:bg-[#724820] transition-colors duration-300 w-full">
                 Book now
                  </button>
                </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full mb-12">
          <div className="bg-white/90 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold mb-3">Safari Experiences</h3>
            <p className="text-gray-700">
              Embark on thrilling wildlife safaris with expert guides, witnessing Africa's 
              majestic animals in their natural habitat.
            </p>
          </div>
          <div className="bg-white/90 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold mb-3">Cultural Immersion</h3>
            <p className="text-gray-700">
              Connect with local communities, learn about traditions, and experience 
              authentic African hospitality.
            </p>
          </div>
          <div className="bg-white/90 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold mb-3">Adventure Activities</h3>
            <p className="text-gray-700">
              From hiking through scenic landscapes to participating in conservation 
              efforts, experience the best of African adventures.
            </p>
          </div>
        </div>

        <div className="bg-[#8A5624] opacity-90 p-8 rounded-lg max-w-2xl w-full text-center mx-auto">
          <h2 className="text-2xl font-semibold mb-4 text-white">Plan Your Safari Adventure</h2>
          <p className="text-lg mb-4 text-white">
            Let our experienced team help you create the perfect African safari experience.
          </p>
          <button className="bg-black text-white px-8 py-3 rounded-lg hover:bg-[#724820] transition-colors duration-300">
          <Link to="/contact" className="hover:text-orange-400">
                  Contact Us
                </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HotelReservation;