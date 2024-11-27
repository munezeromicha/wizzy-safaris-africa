import React from "react";
import TourCard from "./TourCard";
import img1 from "../../assets/Images/golden-monkey.jpg";
import img2 from "../../assets/Images/Gorilla.jpeg";
import img3 from "../../assets/Images/Zebra.jpeg";
import img4 from "../../assets/Images/akagera-national-park.jpg";
import img5 from "../../assets/Images/Big-5-in-Akageras.jpg";
import img6 from "../../assets/Images/NyungwePark.jpg";
const tours = [
  {
    title:
      "4 DAYS RWANDA GORILLA AND GOLDEN MONKEY TREKKING AND CITY TOUR EXPERIENCE",
    location: "Rwanda",
    days: "4 Days",
    image: img1,
  },
  {
    title: "3 DAYS RWANDA GORILLA TREKKING SAFARI",
    location: "Rwanda",
    days: "3 Days",
    image: img2,
  },
  {
    title: "1 DAY ZEBRA TREKKING SAFARI",
    location: "Rwanda",
    days: "1 Day",
    image: img3,
  },
  {
    title: "2 DAYS AKAGERA NATIONAL PARK SAFARI",
    location: "Rwanda",
    days: "2 Days",
    image: img4,
  },
  {
    title: "3 DAYS IN AKAGERA NATIONAL PARK SAFARI TO SEE BIG FIVE IN RWANDA",
    location: "Rwanda",
    days: "3 Days",
    image: img5,
  },
  {
    title: "2 DAYS NYUNGWE SAFARI TOUR PACKAGE",
    location: "Rwanda",
    days: "2 Days",
    image: img6,
  },
];

const TourList: React.FC = () => {
  return (
    <div className="bg-[#21140b] py-10">
      <h2 className="text-center text-3xl font-bold text-white mb-8">
        Popular Tours
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {tours.map((tour, index) => (
          <TourCard
            key={index}
            title={tour.title}
            location={tour.location}
            days={tour.days}
            image={tour.image}
          />
        ))}
      </div>
      <div className="flex justify-center mt-10">
       
      </div>
    </div>
  );
};

export default TourList;
