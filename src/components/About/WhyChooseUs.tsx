import React from "react";

const WhyChooseUs: React.FC = () => {
  return (
    <div className="w-full py-12 px-6 md:px-16 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div className="space-y-4">
          <h3 className="text-lg italic text-custom-brown">Why Choose Us</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-custom-brown">
            Disability is not inability, let's travel
          </h2>
        </div>

        <div className="space-y-4 text-gray-700">
          <p>
            In the world of African travel,{" "}
            <strong>Africa Wizzy Safaris</strong> distinguishes itself with
            unmatched expertise. Our affordable pricing and extensive industry
            insight have earned us top ratings on platforms like TripAdvisor and
            SafariBookings. We prioritize safety and customer satisfaction,
            ensuring every journey we create is both unforgettable and
            exceptional.
          </p>
          <p>
            What makes us truly unique is <strong>Africa Wizzy Safaris</strong>{" "}
            Advantage—our steadfast commitment to ensuring your satisfaction. We
            carefully plan every aspect of your trip, creating a smooth and
            unforgettable experience. With Africa Wizzy Safaris, your adventure
            becomes more than just a trip, transforming into a collection of
            tailored moments that will leave a lasting impression long after
            you've returned.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
