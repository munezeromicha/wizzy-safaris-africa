import React from 'react';
import Image from '../../assets/Images/WhatsApp Image 2024-09-28 at 12.06.03_dfc3d239.jpg'

const WhyChooseUs: React.FC = () => {
  return (
    <div className="bg-beige-100 py-12 px-8 md:px-20 flex flex-col md:flex-row items-center justify-between">
      <div className="w-full md:w-1/2 flex justify-center md:justify-start mb-8 md:mb-0">
        <img
          src={Image}
          alt="Group Tour"
          className="w-80 h-80 rounded-t-full object-cover"
        />
      </div>

      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-brown-700 font-bold text-xl">Why Choose Us</h2>
        <h1 className="text-3xl font-bold text-brown-800 mt-4">
          Discovering hidden treasures through tours.
        </h1>
        <div className="mt-8 space-y-6">
          <div className="flex items-center justify-center md:justify-start space-x-4">
            <div className="text-brown-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5h18M9 3v2m6-2v2M5 7v13h14V7M7 9h10v5H7z"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-brown-800">Tour Operations</h3>
              <p className="text-gray-600">Explore Rwanda’s splendor with our expertly curated tours.</p>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-start space-x-4">
            <div className="text-brown-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c1.38 0 2.5 1.12 2.5 2.5S13.38 13 12 13 9.5 11.88 9.5 10.5 10.62 8 12 8z"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-brown-800">Best Price Guarantee</h3>
              <p className="text-gray-600">Enjoy unmatched prices for unparalleled experiences.</p>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-start space-x-4">
            <div className="text-brown-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 6h18M3 12h18M3 18h18"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-brown-800">24/7 Customer Support</h3>
              <p className="text-gray-600">Supporting your journey, anytime, anywhere.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
