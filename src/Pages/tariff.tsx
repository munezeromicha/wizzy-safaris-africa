import React, { useState } from 'react';
import styles from '../styles/Tariff.module.css';
import Footer from '../components/Footer/Footer';
// Import your tour images
import tourImg1 from "../assets/Images/Gorilla.jpeg";
import tourImg2 from "../assets/Images/Hot-Air-Balloon.jpg";
import tourImg3 from "../assets/Images/KWITA-IZINA.jpg";
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
    // Add more tours as needed
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
                <div className={styles.tourDetails}>
                  <div className={styles.info}>
                    <p className={styles.price}>{tour.price}</p>
                    <p className={styles.duration}>{tour.days}</p>
                  </div>
                  <button className={styles.bookButton} onClick={() => handleOpenModal(tour)}>See more</button>
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
              <button className={styles.bookNowButton}>
                Book Now
              </button>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default Tariff; 