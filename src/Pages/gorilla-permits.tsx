import React from "react";
import img1 from "../../src/assets/Images/GorillaMountain.jpg";
import backgroundVideo from "../../src/assets/Images/VID-20240928-WA0028.mp4"; 

const GorillaPermits: React.FC = () => {
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
        <h1 className="text-4xl font-bold mb-8 text-white">Gorilla Permits</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img 
              src={img1} 
              alt="Gorilla Trekking" 
              className="w-full h-[400px] object-cover rounded-lg"
            />
          </div>
          <div className="bg-white/90 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Mountain Gorilla Trekking</h2>
            <p className="text-lg mb-4">
              Get up close with Rwanda's magnificent mountain gorillas. We handle all permit 
              arrangements for an unforgettable gorilla trekking experience in Volcanoes 
              National Park.
            </p>
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <h3 className="font-semibold mb-2">Permit Information:</h3>
              <ul className="list-disc list-inside">
                <li>Duration: 1 hour with gorillas</li>
                <li>Advance booking required</li>
                <li>Professional guides included</li>
                <li>Small groups only</li>
                <li>Safety briefing provided</li>
              </ul>
            </div>
            <button className="bg-[#8A5624] text-white px-6 py-3 rounded-lg hover:bg-[#724820] transition-colors duration-300">
              Book Permit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GorillaPermits;