import React from "react";
import img1 from "../../src/assets/Images/Hot-Air-Balloon.jpg";
import backgroundVideo from "../../src/assets/Images/Wilderness Bisate - Volcanoes National Park - Rwanda.mp4";

const HotelReservation: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-[100%] object-cover z-0"
      >
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div>

      <div className="relative z-20 container mx-auto px-4 py-8 flex flex-col items-center">
        <h1 className="text-5xl font-bold mb-8 text-white text-center">Hotel Reservation</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full mb-12">
          <div>
            <img 
              src={img1} 
              alt="Luxury Hotel" 
              className="w-full h-[400px] object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="bg-white/90 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Luxury Accommodations</h2>
            <p className="text-lg mb-4">
              Find your perfect stay in Rwanda with our extensive selection of hotels, 
              lodges, and luxury accommodations. We partner with the best properties 
              to ensure your comfort and satisfaction throughout your stay.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-gray-100 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Luxury Hotels</h3>
                <ul className="list-disc list-inside">
                  <li>5-star amenities</li>
                  <li>Premium locations</li>
                  <li>Exclusive deals</li>
                </ul>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Eco Lodges</h3>
                <ul className="list-disc list-inside">
                  <li>Sustainable stays</li>
                  <li>Nature views</li>
                  <li>Local experience</li>
                </ul>
              </div>
            </div>
            <button className="bg-[#8A5624] text-white px-6 py-3 rounded-lg hover:bg-[#724820] transition-colors duration-300 w-full">
              Book Now
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full mb-12">
          <div className="bg-white/90 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold mb-3">Premium Services</h3>
            <p className="text-gray-700">
              Enjoy 24/7 concierge service, airport transfers, and personalized attention 
              throughout your stay.
            </p>
          </div>
          <div className="bg-white/90 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold mb-3">Dining Excellence</h3>
            <p className="text-gray-700">
              Experience world-class cuisine with our selection of restaurants offering 
              both local and international dishes.
            </p>
          </div>
          <div className="bg-white/90 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold mb-3">Wellness & Spa</h3>
            <p className="text-gray-700">
              Rejuvenate your body and mind with our premium spa services and wellness 
              facilities.
            </p>
          </div>
        </div>

        <div className="bg-white/90 p-8 rounded-lg shadow-lg max-w-2xl w-full text-center">
          <h2 className="text-2xl font-semibold mb-4">Need Assistance?</h2>
          <p className="text-lg mb-4">
            Our travel experts are here to help you plan the perfect stay.
          </p>
          <button className="bg-[#8A5624] text-white px-8 py-3 rounded-lg hover:bg-[#724820] transition-colors duration-300">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default HotelReservation;