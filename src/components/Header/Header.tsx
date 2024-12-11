import Layout from "../../Pages/Layout";
import video from "../../assets/Images/vid1.mp4";
import { useState, useEffect } from "react";

function Header() {
  const [showFullText, setShowFullText] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Add window resize listener
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const fullText = `Africa Wizzy Safaris is a travel company in Rwanda dedicated to providing accessible tourism experiences for all travelers, regardless of physical ability. We specialize in curating unique, inclusive tours that allow everyone to experience the beauty and culture of Rwanda in a way that suits their individual needs.

Our services cater to a wide range of travelers, including people with disabilities, seniors, families, and those seeking budget-friendly options. At Africa Wizzy Safaris, we understand that travel should be an enriching experience for everyone, which is why we offer wheelchair-friendly tours, specialized group travel, and family-friendly safari packages.

We focus on creating memorable experiences in Rwanda's stunning national parks, including Gorilla Trekking in Volcanoes National Park, cultural and historical tours, hiking adventures, and more. Every journey with us is designed to be comfortable, accessible, and enriching, allowing you to explore Rwanda’s natural wonders and vibrant culture with ease.

Our commitment is to make tourism in Rwanda accessible, ensuring that no one is left behind. Whether it’s a guided tour, an adventurous trek, or a cultural exploration, we provide customized solutions that make your dream trip possible.

At Africa Wizzy Safaris, we don’t just take you on a tour we provide experiences that open doors to a world of beauty, culture, and adventure for everyone.`;
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
            Adventures for Every <span className="text-green-800">Ability</span>
            !
          </h2>

          <div className="w-full px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 max-w-7xl">
            <p className="text-white  bg-black bg-opacity-50 p-4 md:p-6 rounded-lg text-sm md:text-base lg:text-m">
              {isMobile ? `${fullText.slice(0, 50)}... ` : fullText}
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
