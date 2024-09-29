import React from "react";
import TestimonialCard from "./TestimonialCard";
import Avatar from "../../assets/Images/Avatar.jpg"

const testimonials = [
  {
    name: "Avatar",
    avatar: Avatar,
    rating: 5,
    review:
      "The tour was amazing, best service from the director Alain all the way...",
    platform: "Industry",
  },
  {
    name: "Avatar",
    avatar: Avatar,
    rating: 5,
    review:
      "Thank you Africa wizzy Safaris Rwanda for the amazing day of Gorilla Trekking...",
    platform: "Industry",
  },
  {
    name: "Avatar",
    avatar: Avatar,
    rating: 5,
    review:
      "I had the privilege of embarking on a two-week trip through Rwanda...",
    platform: "Industry",
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="bg-beige-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-brown-700">
            What our customers say
          </h2>
          <p className="text-brown-600">TESTIMONIALS</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              avatar={testimonial.avatar}
              rating={testimonial.rating}
              review={testimonial.review}
              platform={testimonial.platform}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
