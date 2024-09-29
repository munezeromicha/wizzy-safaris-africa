import React from "react";
import image from "../../assets/Images/elephant.jpg";
const HeroSection: React.FC = () => {
  return (
    <div
      className="relative w-full h-auto bg-cover bg-center bg-no-repeat p-6"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 flex flex-col items-start justify-center h-full px-6 md:px-16 lg:px-24 text-white">
        <h3 className="text-lg italic">Our Commitment</h3>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-2">
          Excellence in Travel and Beyond
        </h1>
        <p className="mt-4 max-w-2xl text-lg md:text-lg lg:text-xlg">
          Africa Wizzy Safaris is committed to curating unique and immersive
          travel experiences that transcend the ordinary, bringing travelers
          closer to the heart of Africa's vibrant cultures, landscapes, and
          wildlife. We believe in providing more than just luxury—our focus is
          on crafting meaningful journeys that inspire, educate, and connect.
          With a strong commitment to sustainability, we prioritize the
          conservation of Africa's rich natural heritage and support local
          communities along the way. Our goal is to meet and exceed your travel
          expectations with personalized services, ensuring every adventure
          leaves a lasting impact and unforgettable memories.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
