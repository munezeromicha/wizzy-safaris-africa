import React from "react";
import NewsCard from "./NewsCard";
import masai from "../../assets/Images/Masai.jpg"
import img1 from "../../assets/Images/GorillaMountain.jpg"
import img2 from "../../assets/Images/africaEast.jpg"
import { useState } from "react";

const newsData = [
  {
    title: "AKAGERA NATIONAL PARK, RWANDA",
    date: "September 6, 2024",
    imageUrl: masai,
  },
  {
    title: "EAST AFRICA'S 10 BEST TRAVEL DESTINATIONS",
    date: "September 3, 2024",
    imageUrl: img2,
  },
  {
    title: "GORILLA TREKKING ADVENTURE IN RWANDA",
    date: "August 29, 2024",
    imageUrl: img1,
  },
];

const TravelNewsSection: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const handleWhatsAppClick = () => {
    setShowModal(true);
  };

  const handleConfirm = () => {
    const whatsappUrl = `https://wa.me/+250786384595`;
    window.open(whatsappUrl, '_blank');
    setShowModal(false);
  };

  return (
    <section className="py-16 bg-beige-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-brown-700">
            Travel News & Updates
          </h2>
          <p className="mt-2 text-brown-600">Travel information</p>
        </div>
        <div className="mt-12 grid gap-2 grid-cols-2 sm:grid-cols-3 lg:grid-cols-3">
          {newsData.map((newsItem, index) => (
            <NewsCard
              key={index}
              title={newsItem.title}
              date={newsItem.date}
              imageUrl={newsItem.imageUrl} link={""} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <button 
            onClick={handleWhatsAppClick}
            className="px-8 py-3 bg-brown-600 text-white rounded-md hover:bg-brown-700"
          >
            More insights
          </button>
        </div>

        {/* Custom Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full mx-4">
              <h3 className="text-xl font-semibold text-brown-700 mb-4">
                Proceed to WhatsApp
              </h3>
              <p className="text-brown-600 mb-6">
                Would you like to continue to WhatsApp for more travel details?
              </p>
              <div className="flex justify-end space-x-4">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 text-brown-600 hover:text-brown-700"
                >
                  Cancel
                </button>
                <button
                  onClick={handleConfirm}
                  className="px-4 py-2 bg-brown-600 text-white rounded hover:bg-brown-700"
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TravelNewsSection;
