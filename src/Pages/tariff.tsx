import React, { useState } from 'react';
import styles from '../styles/Tariff.module.css';
import Footer from '../components/Footer/Footer';
// Import your tour images
import tourImg1 from "../assets/Images/Gorilla.jpeg";
import tourImg2 from "../assets/Images/Hot-Air-Balloon.jpg";
import tourImg3 from "../assets/Images/KWITA-IZINA.jpg";
import { Link } from 'react-router-dom';
// Add more imports as needed

const Tariff: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [selectedTour, setSelectedTour] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const tours = [
    {
      id: 1,
      image: tourImg1,
      name: "Gorilla Trekking Adventure",
      price: "$1500",
      days: "3 Days",
      alt: "Mountain Gorilla Tour",
      description: "Embark on an unforgettable journey into the misty mountains of Rwanda to encounter the majestic mountain gorillas in their natural habitat. This exclusive experience includes professional guides, permits, and comfortable accommodations. Trek through the beautiful Volcanoes National Park, observe these gentle giants up close, and learn about conservation efforts. Package includes meals, transportation, and cultural village visits."
    },
    {
      id: 2,
      image: tourImg2,
      name: "Hot Air Balloon Safari",
      price: "$800",
      days: "1 Day",
      alt: "Hot Air Balloon Tour",
      description: "Experience the thrill of a hot air balloon safari in the scenic landscapes of Rwanda. Enjoy breathtaking views of the mountains and valleys as you soar through the sky. This unique adventure includes professional guides, permits, and comfortable accommodations. Package includes meals, transportation, and cultural village visits."
    },
    {
      id: 3,
      image: tourImg3,  
      name: "Cultural Experience Tour",
      price: "$1200",
      days: "4 Days",
      alt: "Cultural Tour",
      description: "Discover the rich cultural heritage of Rwanda through a comprehensive cultural experience tour. Explore the local communities, learn about their traditions, and experience their daily life. This exclusive experience includes professional guides, permits, and comfortable accommodations. Package includes meals, transportation, and cultural village visits."
    },
    {
      id: 4,
      image: tourImg1,
      name: "Nyungwe Forest Trek",
      price: "$1300",
      days: "3 Days",
      alt: "Forest Trek Tour",
      description: "Explore the ancient Nyungwe Forest, home to diverse primates and bird species. Trek through the canopy walkway suspended 60 meters above the forest floor. Experience guided nature walks, chimpanzee tracking, and bird watching. Package includes forest permits, expert guides, accommodation, and meals."
    },
    {
      id: 5,
      image: tourImg2,
      name: "Akagera Wildlife Safari",
      price: "$1800",
      days: "4 Days",
      alt: "Wildlife Safari Tour",
      description: "Discover Rwanda's only savannah park, home to the Big Five. Experience morning and evening game drives, boat safaris on Lake Ihema, and bird watching. Includes luxury lodge accommodation, professional guides, park fees, and all meals."
    },
    {
      id: 6,
      image: tourImg3,
      name: "Twin Lakes Adventure",
      price: "$950",
      days: "2 Days",
      alt: "Lakes Adventure Tour",
      description: "Visit the stunning Lakes Burera and Ruhondo, known as the Twin Lakes. Enjoy kayaking, fishing, and hiking with spectacular views of the Virunga volcanoes. Package includes lakeside accommodation, activities, equipment, and local guide services."
    },
    {
      id: 7,
      image: tourImg1,
      name: "Kigali City Experience",
      price: "$600",
      days: "2 Days",
      alt: "City Tour",
      description: "Immerse yourself in Rwanda's vibrant capital. Visit the Genocide Memorial, local markets, and art galleries. Experience traditional dance performances and cooking classes. Includes hotel stay, city transportation, and cultural activities."
    },
    {
      id: 8,
      image: tourImg2,
      name: "Coffee Trail Tour",
      price: "$750",
      days: "2 Days",
      alt: "Coffee Tour",
      description: "Journey through Rwanda's coffee regions. Learn about coffee cultivation, processing, and roasting. Participate in coffee cupping sessions and meet local farmers. Includes plantation visits, accommodation, and all coffee experiences."
    },
    {
      id: 9,
      image: tourImg3,
      name: "Volcanoes Hiking Experience",
      price: "$1100",
      days: "3 Days",
      alt: "Volcano Hiking Tour",
      description: "Trek the magnificent Virunga volcanoes, including Mt. Bisoke or Mt. Karisimbi. Experience stunning crater lakes and mountain vegetation zones. Package includes hiking permits, equipment, mountain guides, and accommodation."
    },
    {
      id: 10,
      image: tourImg1,
      name: "Cultural Village Stay",
      price: "$850",
      days: "2 Days",
      alt: "Cultural Village Tour",
      description: "Live with local communities in a traditional village setting. Learn traditional crafts, music, and dance. Experience local cuisine and storytelling. Includes homestay accommodation, cultural activities, and traditional meals."
    }
  ];

  const goBack = () => {
    window.history.back();
  };

  const handleOpenModal = (tour: unknown) => {
    setSelectedTour(tour);
    setIsModalOpen(true);
    // Prevent scrolling when modal is open
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setSelectedTour(null);
    setIsModalOpen(false);
    // Re-enable scrolling when modal is closed
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <div className={styles.tariffContainer}>
        <button
          onClick={goBack}
          className="absolute top-4 left-4 text-white underline bg-green-700 p-3 rounded-full shadow-md hover:bg-green-600 transition"
        >
          back
        </button>
        <h1 className={styles.title}>Our Tour Packages</h1>
        
        <div className={styles.cardGrid}>
          {tours.map((tour) => (
            <div key={tour.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <img
                  src={tour.image}
                  alt={tour.alt}
                  className={styles.tourImage}
                />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.tourName}>{tour.name}</h3>
                <div className="flex justify-between items-center">
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-start sm:items-center">
                    <p className={styles.price}>{tour.price}</p>
                    <p className={styles.duration}>{tour.days}</p>
                  </div>
                  <button className={styles.bookButton} onClick={() => handleOpenModal(tour)}>
                    See more
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && selectedTour && (
        <div className={styles.modalOverlay} onClick={handleCloseModal}>
          <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={handleCloseModal}>
              <span>&times;</span>
            </button>
            <div className={styles.modalImageContainer}>
              <img 
                src={selectedTour.image} 
                alt={selectedTour.alt} 
                className={styles.modalImage}
              />
            </div>
            <div className={styles.modalBody}>
              <h2 className={styles.modalTitle}>{selectedTour.name}</h2>
              <div className={styles.modalInfo}>
                <span className={styles.modalPrice}>{selectedTour.price}</span>
                <span className={styles.modalDuration}>{selectedTour.days}</span>
              </div>
              <p className={styles.modalDescription}>{selectedTour.description}</p>
              <Link to="/bookings">
              <button className={styles.bookNowButton}>
                Book Now
              </button>
              </Link>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default Tariff; 