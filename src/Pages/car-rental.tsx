import React from "react";
import img1 from "../../src/assets/Images/IMG-20240928-WA0112.jpg";
import backgroundVideo from "../../src/assets/Images/VID-20240928-WA0028.mp4";
import { Link } from "react-router-dom";

const CarRental: React.FC = () => {
  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="relative min-h-screen">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
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
        <h1 className="text-4xl font-bold mb-8 text-white text-center">Car Rental Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <img 
              src={img1} 
              alt="Luxury Car" 
              className="w-full h-[400px] object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="bg-white/90 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Premium Vehicle Fleet</h2>
            <p className="text-lg mb-4">
              Explore Rwanda in comfort and style with our diverse fleet of well-maintained vehicles. 
              Whether you need a rugged 4x4 for safari adventures or a luxury sedan for business travel, 
              we have the perfect vehicle for your journey.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-gray-100 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Vehicle Types</h3>
                <ul className="list-disc list-inside">
                  <li>4x4 SUVs</li>
                  <li>Luxury Sedans</li>
                  <li>Safari Vehicles</li>
                  <li>Minivans</li>
                </ul>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Rental Includes</h3>
                <ul className="list-disc list-inside">
                  <li>Full Insurance</li>
                  <li>24/7 Support</li>
                  <li>GPS Navigation</li>
                  <li>Roadside Assistance</li>
                </ul>
              </div>
            </div>
            <Link to="/bookings" className="hover:text-orange-400">
            <button className="bg-[#8A5624] text-white px-6 py-3 rounded-lg hover:bg-[#724820] transition-colors duration-300 w-full">
                 Reserve with Tour
                  </button>
                </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/90 p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold mb-3">Driver Services</h3>
            <p className="text-gray-700">
              Professional, experienced drivers available for your convenience. 
              All our drivers are bilingual and know the country well.
            </p>
          </div>
          <div className="bg-white/90 p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold mb-3">Flexible Rental Terms</h3>
            <p className="text-gray-700">
              Choose from hourly, daily, weekly, or monthly rental options. 
              Competitive rates with special long-term discounts.
            </p>
          </div>
          <div className="bg-white/90 p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold mb-3">Custom Tours</h3>
            <p className="text-gray-700">
              Combine your car rental with guided tours. 
              Create your perfect itinerary with our travel experts.
            </p>
          </div>
        </div>

        <div className="bg-[#8A5624] opacity-90 p-8 rounded-lg  max-w-2xl w-full text-center mx-auto">
          <h2 className="text-2xl font-semibold mb-4 text-white">Need Help Choosing?</h2>
          <p className="text-lg mb-4">
            Our team is here to help you select the perfect vehicle for your needs.
            Contact us for personalized assistance and special rates.
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

export default CarRental;