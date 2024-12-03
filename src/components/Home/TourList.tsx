import React from "react";
import TourCard from "./TourCard";
import img1 from "../../assets/Images/golden-monkey.jpg";
import img2 from "../../assets/Images/Gorilla.jpeg";
import img3 from "../../assets/Images/Zebra.jpeg";
import img4 from "../../assets/Images/NyungwePark.jpg";
import img5 from "../../assets/Images/nyandungu.jpg";
import img6 from "../../assets/Images/kigali.jpg";
import img7 from "../../assets/Images/car1.jpg";
const tours = [
  {
    title: "4 DAYS RWANDA GORILLA AND GOLDEN MONKEY",
    location: "Rwanda",
    days: "4 Days",
    image: img1,
    description:
      "At Africa Wizzy Safaris, we offer you the unique opportunity to embark on an unforgettable journey to witness mountain gorillas and golden monkeys in their natural habitats. Trek through lush forests in Rwanda and Uganda, where you’ll experience the beauty and wonder of these incredible primates while contributing to vital conservation efforts.",
    price: "From $1,500",
  },
  {
    title: "3 DAYS RWANDA GORILLA TREKKING SAFARI",
    location: "Rwanda",
    days: "3 Days",
    image: img2,
    description:
      "At Africa Wizzy Safaris, we invite you to explore the stunning landscapes of the Virunga Volcanoes in Rwanda and Uganda, home to both mountain gorillas and golden monkeys. Trek through lush forests and volcanic terrain, where you will have the rare chance to observe these majestic primates in the wild, all while supporting vital conservation efforts",
    price: "From $1,200",
  },
  {
    title: "1 DAY ZEBRA TREKKING SAFARI IN AKAGERA NATIONAL PARK",
    location: "Rwanda",
    days: "1 Day",
    image: img3,
    description:
      "At Africa Wizzy Safaris, we take you on an unforgettable journey through Akagera National Park in Rwanda, a stunning blend of savannah, wetland, and forest landscapes. Experience exciting game drives and boat safaris, where you can encounter Africa’s iconic wildlife, including lions, elephants, zebras, and giraffes, all while immersing yourself in the park's breathtaking beauty.",
    price: "From $500",
  },
  {
    title: "2 DAYS NYUNGWE NATIONAL PARK SAFARI ",
    location: "Rwanda",
    days: "2 Days",
    image: img4,
    description: "At Africa Wizzy Safaris, we offer an incredible adventure in Nyungwe National Park, Rwanda’s premier rainforest destination. Explore lush forests, home to diverse wildlife including chimpanzees, golden monkeys, and over 300 bird species, while enjoying scenic hikes, canopy walks, and breathtaking views of the park's pristine natural beauty.",
    price: "From $800",
  },
  {
    title: "Nyandungu Urban Wetland Eco-Tourism Park ",
    location: "Rwanda",
    days: "3 Days",
    image: img5,
    description:
      "At Africa Wizzy Safaris, we invite you to discover the serene beauty of Nyandungu Urban Wetland Eco-Tourism Park in Kigali, Rwanda. This unique eco-tourism destination offers a peaceful escape with walking trails, birdwatching, and educational tours, allowing visitors to explore the rich biodiversity and sustainable conservation efforts of the wetland, all within an easily accessible urban setting.",
    price: "From $1,000",
  },
  {
    title: "2 DAYS WALKING TOUR IN KIGALI DIFFERENT PLACES ",
    location: "Rwanda",
    days: "2 Days",
    image: img6,
    description: "At Africa Wizzy Safaris, we offer a captivating Kigali City Tour, where you can explore Rwanda’s vibrant capital. Visit historical sites like the Kigali Genocide Memorial, local markets, and cultural hubs, while immersing yourself in the city's rich heritage, bustling atmosphere, and scenic views, making for a truly memorable urban experience.",
    price: "From $900",
  },
  {
    title: "Car Rentals",
    location: "Rwanda",
    days: "7 days",
    image: img7,
    description: "At Africa Wizzy Safaris, we provide reliable and convenient car rental services to enhance your travel experience in Rwanda. Whether you're exploring the city, going on a wildlife safari, or visiting cultural sites, our well-maintained fleet of vehicles, including 4x4s, SUVs, and compact cars, ensures comfort, safety, and flexibility for your journey.",
    price: "From $300 per day",
  },
];

const TourList: React.FC = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const toursPerPage = 6;

  const indexOfLastTour = currentPage * toursPerPage;
  const indexOfFirstTour = indexOfLastTour - toursPerPage;
  const currentTours = tours.slice(indexOfFirstTour, indexOfLastTour);
  const totalPages = Math.ceil(tours.length / toursPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="bg-[#21140b] py-10">
      <h2 className="text-center text-3xl font-bold text-white mb-8">
        Popular Tours
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {currentTours.map((tour, index) => (
          <TourCard
            key={index}
            title={tour.title}
            location={tour.location}
            days={tour.days}
            image={tour.image}
            description={tour.description}
            price={tour.price}
          />
        ))}
      </div>
      <div className="flex justify-center mt-10 gap-2">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map(
          (pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}
              className={`px-4 py-2 rounded ${
                currentPage === pageNumber
                  ? "bg-[#c0703b] text-white"
                  : "bg-white text-[#21140b] hover:bg-[#c0703b] hover:text-white"
              }`}
            >
              {pageNumber}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default TourList;
