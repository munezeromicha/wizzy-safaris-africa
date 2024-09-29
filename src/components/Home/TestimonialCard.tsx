import React from "react";

interface TestimonialCardProps {
  name: string;
  avatar: string;
  rating: number;
  review: string;
  platform: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  avatar,
  rating,
  review,
  platform,
}) => {
  return (
    <div className="max-w-sm bg-white p-6 rounded-lg shadow-md">
      <div className="mb-4">
        <div className="flex justify-center mb-2">
          {[...Array(rating)].map((_, index) => (
            <svg
              key={index}
              className="w-6 h-6 text-yellow-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.163c.969 0 1.371 1.24.588 1.81l-3.375 2.453a1 1 0 00-.364 1.118l1.287 3.957c.299.921-.755 1.688-1.539 1.118l-3.375-2.453a1 1 0 00-1.175 0L5.464 17.03c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L1.473 8.384c-.784-.57-.38-1.81.588-1.81h4.163a1 1 0 00.95-.69l1.286-3.957z" />
            </svg>
          ))}
        </div>
        <p className="text-gray-600 text-center mb-6">{review}</p>
        <div className="flex flex-col items-center">
          <img
            className="w-14 h-14 rounded-full mb-2"
            src={avatar}
            alt={name}
          />
          <h3 className="font-semibold text-gray-800">{name}</h3>
          <p className="text-gray-500">{platform}</p>
        </div>
      </div>
      <a href="#" className="text-orange-500 text-center block">
        Read More
      </a>
    </div>
  );
};

export default TestimonialCard;
