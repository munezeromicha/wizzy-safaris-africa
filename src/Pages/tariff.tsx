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
      price: "$1,792",
      days: "3 Days",
      alt: "Mountain Gorilla Tour",
      description: "Embark on an unforgettable journey into the misty mountains of Rwanda to encounter the majestic mountain gorillas in their natural habitat. This exclusive experience includes professional guides, permits, and comfortable accommodations. Trek through the beautiful Volcanoes National Park, observe these gentle giants up close, and learn about conservation efforts.",
      packageDetails: {
        mainDestination: "Volcanoes National Park (Gorillas)",
        accommodations: "No accommodations",
        mealsAndDrinks: {
          included: ["Lunch", "Drinking water"],
          excluded: ["Breakfast", "Dinner", "Other drinks"]
        },
        rates: {
          "2024": {
            solo: 1987,
            group: 1792
          },
          "2025": {
            solo: 1903,
            group: 1792
          }
        },
        included: [
          "Park fees (For non-residents)",
          "Gorilla permits (One per person, non-resident)",
          "All activities (Unless labeled as optional)",
          "A professional driver/guide",
          "All transportation (Unless labeled as optional)",
          "All Taxes/VAT",
          "Meals (As specified in the day-by-day section)",
          "Drinking water (On all days)"
        ],
        excluded: [
          "International flights (From/to home)",
          "Roundtrip airport transfer",
          "Additional accommodation before and at the end of the tour",
          "Tips (Tipping guideline US$10.00 pp per day)",
          "Personal items (Souvenirs, travel insurance, visa fees, etc.)",
          "Government imposed increase of taxes and/or park fees"
        ],
        importantInfo: {
          maxGroupSize: 16,
          minAge: 15,
          location: {
            start: "Kigali",
            end: "Kigali",
            airport: "Kigali Airport (KGL)"
          }
        }
      }
    },
    {
      id: 2,
      image: tourImg2,
      name: "Hot Air Balloon Safari",
      price: "$800",
      days: "1 Day",
      alt: "Hot Air Balloon Tour",
      description: "Experience the thrill of a hot air balloon safari...",
      packageDetails: {
        mainDestination: "Akagera National Park",
        accommodations: "No accommodations",
        mealsAndDrinks: {
          included: ["Breakfast", "Drinking water"],
          excluded: ["Lunch", "Dinner", "Other drinks"]
        },
        rates: {
          "2024": {
            solo: 900,
            group: 800
          },
          "2025": {
            solo: 950,
            group: 850
          }
        },
        included: [
          "Balloon safari permit",
          "Professional pilot and crew",
          "Safety briefing",
          "Champagne breakfast",
          "Transfer to/from launch site",
          "Flight certificate"
        ],
        excluded: [
          "Hotel pickup/drop-off",
          "Personal items",
          "Travel insurance",
          "Additional activities",
          "Tips for staff"
        ],
        importantInfo: {
          maxGroupSize: 8,
          minAge: 6,
          location: {
            start: "Akagera National Park",
            end: "Akagera National Park",
            airport: "Kigali Airport (KGL)"
          }
        }
      }
    },
    {
      id: 3,
      image: tourImg3,
      name: "Cultural Experience Tour",
      price: "$1200",
      days: "4 Days",
      alt: "Cultural Tour",
      description: "Discover the rich cultural heritage of Rwanda...",
      packageDetails: {
        mainDestination: "Various Cultural Sites",
        accommodations: "Local guesthouses and homestays",
        mealsAndDrinks: {
          included: ["Breakfast", "Lunch", "Dinner", "Local beverages"],
          excluded: ["Imported drinks", "Additional snacks"]
        },
        rates: {
          "2024": {
            solo: 1400,
            group: 1200
          },
          "2025": {
            solo: 1450,
            group: 1250
          }
        },
        included: [
          "All accommodations",
          "Local guide and interpreter",
          "Cultural activities and workshops",
          "Traditional performances",
          "Craft-making sessions",
          "All mentioned meals",
          "Local transport"
        ],
        excluded: [
          "International flights",
          "Airport transfers",
          "Personal expenses",
          "Tips for guides",
          "Travel insurance"
        ],
        importantInfo: {
          maxGroupSize: 12,
          minAge: 8,
          location: {
            start: "Kigali",
            end: "Kigali",
            airport: "Kigali Airport (KGL)"
          }
        }
      }
    },
    
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
              
              {selectedTour.packageDetails && (
                <div className={styles.packageDetails}>
                  <h3>Package Details</h3>
                  <p><strong>Main Destination:</strong> {selectedTour.packageDetails.mainDestination}</p>
                  <p><strong>Accommodations:</strong> {selectedTour.packageDetails.accommodations}</p>
                  
                  <h4>Meals & Drinks</h4>
                  <p><strong>Included:</strong> {selectedTour.packageDetails.mealsAndDrinks.included.join(', ')}</p>
                  
                  <h4>Rates Per Person</h4>
                  {(Object.entries(selectedTour.packageDetails.rates) as [string, { solo: number; group: number }][]).map(([year, rates]) => (
                    <p key={year}>
                      {year}: Solo ${rates.solo}, Group ${rates.group}
                    </p>
                  ))}
                  <h4>Included</h4>
                  <ul>
                    {selectedTour.packageDetails.included.map((item: React.ReactNode, index: number) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                  
                  <h4>Excluded</h4>
                  <ul>
                    {selectedTour.packageDetails.excluded.map((item: string, index: number) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                  
                  <h4>Important Information</h4>
                  <p>Maximum group size: {selectedTour.packageDetails.importantInfo.maxGroupSize}</p>
                  <p>Minimum age: {selectedTour.packageDetails.importantInfo.minAge} years</p>
                  <p>Tour starts and ends in: {selectedTour.packageDetails.importantInfo.location.start}</p>
                </div>
              )}
              
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