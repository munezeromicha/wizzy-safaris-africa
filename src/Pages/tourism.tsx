import React, { useState, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import img2 from "../assets/Images/IMG-20240928-WA0093.jpg";
import img3 from "../assets/Images/IMG-20240928-WA0094.jpg";
import img4 from "../assets/Images/IMG-20240928-WA0095.jpg";
import "tailwindcss/tailwind.css";

const images = [img2, img3, img4];

const Tourism: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  const goBack = () => {
    window.history.back(); 
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-white p-4">
      <button
        onClick={goBack}
        className="absolute top-22 left-6 bg-green-200 p-6 rounded-full shadow-md hover:bg-green-600 transition"
      >
        <FaArrowLeft className="text-black" />
      </button>
      <img
        src={images[currentImageIndex]}
        alt="Tourism"
        className="w-[70vw] h-[60vh] object-cover mb-4 rounded-lg shadow-lg transition-transform duration-500 ease-in-out"
      />
      <div className="w-[70vw] text-center">
        <h1 className="text-black text-xl text-start md:text-xl font-bold mb-2">
          🌍 Tourism: Explore the Heart of Africa
        </h1>
        <p className="text-black text-start mb-4">
          Step into a world of wonder with our expertly curated tours that
          showcase Africa's diverse beauty. Marvel at the vast savannahs of the
          Serengeti, where wildlife roams freely under endless skies. Witness
          the awe-inspiring waterfalls of Rwanda and discover the serenity of
          Zanzibar’s pristine beaches. Explore bustling markets, ancient ruins,
          and cultural festivals that celebrate Africa’s heritage. From the
          iconic Big Five safaris to peaceful eco-tours, every moment is crafted
          to immerse you in Africa’s rich natural and cultural splendor. Let us
          take you on a journey where adventure and discovery meet.
        </p>
        <h1 className="text-black text-xl text-start md:text-xl font-bold mb-2">
          🦍 Gorilla Permits: Witness the Gentle Giants
        </h1>
        <p className="text-black text-start mb-4">
          Embark on an extraordinary journey to meet the majestic mountain
          gorillas in their natural habitat. Trek through misty forests, guided
          by experts who bring the region’s ecology and wildlife to life. Our
          gorilla trekking tours provide a rare, intimate connection with one of
          the world’s most endangered species. We simplify the complex
          permitting process, ensuring a smooth and worry-free experience. Stand
          face-to-face with these magnificent creatures while knowing your visit
          contributes to their conservation. Whether you’re an adventurer, a
          wildlife enthusiast, or a photographer, this experience is truly
          life-changing.
        </p>
        <h1 className="text-black text-xl text-start md:text-xl font-bold mb-2">
          🏨 Hotel Reservations: Stay in Comfort and Style
        </h1>
        <p className="text-black text-start mb-4">
          Rest easy with Africa Wizzy Safaris, where we handle every detail of
          your accommodation. From luxury lodges nestled in the wilderness to
          boutique hotels with stunning vistas, we ensure your stay complements
          your adventure. Experience authentic African hospitality with modern
          comforts, tailored to your preferences. Whether you seek a serene
          retreat after a safari or a vibrant city escape, we’ve got options
          that suit every traveler. Relax knowing that we’ve partnered with the
          best accommodations to enhance your journey. Your comfort and
          satisfaction are our priority, every step of the way.
        </p>
        <h1 className="text-black text-xl text-start md:text-xl font-bold mb-2">
          🚗 Car Rentals: Travel Your Way
        </h1>
        <p className="text-black text-start mb-4">
          Navigate Africa with freedom and flexibility through our car rental
          services. Choose from rugged 4x4s for off-road adventures, comfortable
          SUVs for city explorations, or practical sedans for seamless travel.
          We prioritize safety and reliability, offering well-maintained
          vehicles that meet your needs. Whether you’re exploring wildlife
          reserves, visiting cultural sites, or venturing into uncharted
          territories, our car rental options provide the perfect solution. With
          professional support and 24/7 availability, you can travel with peace
          of mind. Discover Africa on your terms with our trusted car rental
          services.
        </p>
        <div className="my-8">
          <hr className="border-t border-gray-300 my-4" />
        </div>
        <h1 className="text-black text-xl text-start md:text-xl font-bold mb-2">
          Why Choose Africa Wizzy Safaris?
        </h1>
        <p className="text-black text-start mb-4">
          Personalized Experiences: We tailor every tour to match your unique
          interests, preferences, and schedule. Travel with seasoned
          professionals who enrich your journey with insights and stories. We
          prioritize eco-friendly practices and support local communities.
          Attention to detail is our hallmark: from gorilla permits to hotel
          bookings, we manage logistics so you don’t have to. Collaborate with
          reliable service providers and enjoy unmatched 24/7 support from our
          team.
        </p>
      </div>
    </div>
  );
};

export default Tourism;
