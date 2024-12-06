import React from "react";
import img1 from "../../src/assets/Images/GorillaMountain.jpg";
import backgroundVideo from "../../src/assets/Images/VID-20240928-WA0028.mp4"; 
import { Link } from "react-router-dom";
import Footer from "../components/Footer/Footer";

const GorillaPermits: React.FC = () => {
    const goBack = () => {
      window.history.back();
    };
  
    return (
      <><div className="relative min-h-screen">
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
            back
          </button>
          <h1 className="text-4xl font-bold mb-8 text-white text-center">Gorilla Trekking Permits</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full mb-12">
            <div>
              <img
                src={img1}
                alt="Mountain Gorillas"
                className="w-full h-[400px] object-cover rounded-lg shadow-lg" />
            </div>
            <div className="bg-white/90 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">Gorilla Trekking Permits</h2>
              <p className="text-lg mb-4">
                Secure your chance to witness the magnificent mountain gorillas in their natural habitat.
                Rwanda offers a limited number of daily permits to ensure sustainable tourism and the
                protection of these endangered primates.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-gray-100 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Permit Details</h3>
                  <ul className="list-disc list-inside">
                    <li>1-hour gorilla encounter</li>
                    <li>Professional guides</li>
                    <li>Small groups only</li>
                  </ul>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">What's Included</h3>
                  <ul className="list-disc list-inside">
                    <li>Park entrance fees</li>
                    <li>Tracking assistance</li>
                    <li>Conservation contribution</li>
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
              <h3 className="text-xl font-semibold mb-3">Gorilla Families</h3>
              <p className="text-gray-700">
                Visit different habituated gorilla families in Volcanoes National Park, each with their
                unique characteristics and stories.
              </p>
            </div>
            <div className="bg-white/90 p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold mb-3">Conservation Efforts</h3>
              <p className="text-gray-700">
                Learn about Rwanda's successful conservation programs and how your visit contributes to
                protecting these endangered primates.
              </p>
            </div>
            <div className="bg-white/90 p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold mb-3">Trekking Experience</h3>
              <p className="text-gray-700">
                Get prepared for your trek with essential information about hiking conditions,
                photography guidelines, and safety protocols.
              </p>
            </div>
          </div>

          <div className="bg-[#8A5624] opacity-90 p-8 rounded-lg  max-w-2xl w-full text-center mx-auto ">
            <h2 className="text-2xl font-semibold mb-4 text-white opacity-">Ready to Meet the Gorillas?</h2>
            <p className="text-lg mb-4">
              Our experts will help you secure permits and prepare for this life-changing experience.
              Book early as permits are limited and in high demand.
            </p>
            <button className="bg-black text-white px-8 py-3 rounded-lg hover:bg-[#724820] transition-colors duration-300">
              <Link to="/contact" className="hover:text-orange-400">
                Contact Us
              </Link>
            </button>
          </div>
        </div>
      </div><Footer /></>
    );
  };

export default GorillaPermits;