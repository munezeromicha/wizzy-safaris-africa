import Layout from "../../Pages/Layout";
import video from "../../assets/Images/vid1.mp4";
import { useState, useEffect } from 'react';

function Header() {
  const [showFullText, setShowFullText] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Add window resize listener
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const fullText = "Africa Wizzy Safaris is a leading travel company dedicated to creating unforgettable safari experiences across Africa, with a special focus on inclusivity for disabled travelers. Our mission is to break barriers and open the wonders of Africa's breathtaking landscapes, wildlife, and culture to everyone, regardless of physical limitations. We offer fully accessible safari packages that are carefully designed to meet the needs of individuals with mobility challenges. From wheelchair-friendly vehicles to accommodations with accessible facilities, every detail is taken into consideration to ensure comfort and safety without compromising the thrill of adventure. At Africa Wizzy Safaris, we believe that everyone deserves the opportunity to experience Africa's beauty and wildlife in a way that is seamless, enjoyable, and empowering. Whether it's a visit to the majestic Serengeti, a tour of the vibrant Maasai Mara, or a peaceful retreat in the heart of the African wilderness, our team is committed to delivering personalized, life-changing experiences for all travelers. Join us on a journey where the spirit of Africa meets accessibility. With Africa Wizzy Safaris, the wild is within reach for everyone.";

  return (
    <div>
      <Layout />
      <section className="relative h-[90vh] bg-cover bg-center">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6 px-4 text-center">
            Travel Beyond <span className="text-orange-500">Barriers</span>,
            Adventures for Every <span className="text-green-800">Ability</span>!
          </h2>
          
          <div className="w-full px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 max-w-7xl">
            <p className="text-white bg-black bg-opacity-50 p-4 md:p-6 rounded-lg text-sm md:text-base lg:text-lg">
              {isMobile
                ? `${fullText.slice(0, 50)}... `
                : fullText}
              {isMobile && (
                <button
                  onClick={() => setShowFullText(true)}
                  className="text-blue-400 hover:text-blue-300 font-medium ml-1"
                >
                  See More
                </button>
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Modal with improved responsiveness */}
      {showFullText && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-4 md:p-6 w-full max-w-xs sm:max-w-sm md:max-w-2xl mx-4 max-h-[80vh] overflow-y-auto">
            <p className="text-gray-800 mb-4 text-sm md:text-base">
              {fullText}
            </p>
            <div className="flex justify-end">
              <button
                onClick={() => setShowFullText(false)}
                className="bg-blue-500 text-white px-3 py-1.5 md:px-4 md:py-2 text-sm md:text-base rounded hover:bg-blue-600 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="fixed bottom-4 right-4 z-50">
        <a
          href="https://wa.me/+250786384595"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
            className="w-12 h-12"
          />
        </a>
      </div>
    </div>
  );
}

export default Header;
