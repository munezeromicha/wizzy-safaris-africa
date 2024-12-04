import React, { useState } from 'react';
import styles from '../styles/Gallery.module.css';
import img1 from "../assets/Images/Gorilla.jpeg";
import img2 from "../assets/Images/Hot-Air-Balloon.jpg";
import img3 from "../assets/Images/KWITA-IZINA.jpg";
import img4 from "../assets/Images/NyungwePark.jpg";
import img5 from "../assets/Images/nyandungu.jpg";
import img6 from "../assets/Images/kigali.jpg";
import img7 from "../assets/Images/kenya.jpg";
import img8 from "../assets/Images/IMG-20240928-WA0112.jpg";
import vid2 from "../assets/Images/VID-20240928-WA0030.mp4";
import vid3 from "../assets/Images/VID-20240928-WA0028.mp4";
import  vid from "../assets/Images/vid1.mp4";
import vid1 from "../assets/Images/Wilderness Bisate - Volcanoes National Park - Rwanda.mp4";
const gallery: React.FC = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const images = [
    {
      id: 1,
      src: img1,
      alt: 'Mountain Gorilla',
      category: 'interior'
    },
    {
      id: 2,
      src: vid,
      alt: 'Nyungwe national park adventure',
      category: 'interior',
      type: 'video'
    },
    {
      id: 3,
      src: img2,
      alt: 'Hot-air ballon',
      category: 'interior'
    },
    {
      id: 4,
      src: img3,
      alt: 'Naming baby gorilla Ceremony',
      category: 'interior'
    },
    {
      id: 5,
      src: img4,
      alt: 'canopy walk bridge 70m above the ancient Nyungwe forest, ',
      category: 'interior'
    },
    {
      id: 6,
      src: img5,
      alt: 'Experience the serene beauty of Kigali\'s first restored urban wetland, Nyandungu Eco-Park',
      category: 'interior'
    },
    {
      id: 7,
      src: img6,
      alt: 'Convenient and flexible cancellation up to 24 hours before your tour ',
      category: 'exterior'
    },
    {
      id: 8,
      src:vid1,
      alt: 'At Africa Wizzy Safaris, explore the stunning Volcanoes National Park in Rwanda, home to the endangered mountain gorillas. Experience an unforgettable trek through misty forests and volcanic landscapes for a rare wildlife encounter',
      category: 'exterior',
      type: 'video'
    },
    {
      id: 9,
      src: img7,
      alt: 'Landscaped garden',
      category: 'exterior'
    },
    {
      id: 10,
      src:img8,
      alt:  'Economy is in our name. Become our next satisfied customer.',
      category: 'exterior'
    },
    {
      id: 11,
      src: vid2,
      alt: 'At Africa Wizzy Safaris, encounter the majestic lions in their natural habitat, as you explore the wild beauty of Akagera National Park.',
      category: 'exterior',
      type: 'video'
    },
    {
      id: 12,
      src: vid3,
      alt: 'Africa Wizzy Safaris: Explore Rwanda\'s beauty with unforgettable airplane tours!',
      category: 'exterior',
      type: 'video'
    }
  ];

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = images.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(images.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className={styles.galleryContainer}>
      <b><h1>Our Portfolio</h1></b>
      <div className={styles.galleryGrid}>
        {currentItems.map((image) => (
          <div key={image.id} className={styles.imageWrapper}>
            {image.type === 'video' ? (
              <video
                src={image.src}
                className={styles.galleryImage}
                autoPlay
                muted
                loop
                playsInline
              />
            ) : (
              <img
                src={image.src}
                alt={image.alt}
                className={styles.galleryImage}
              />
            )}
            <div className={styles.imageOverlay}>
              <p>{image.alt}</p>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.pagination}>
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default gallery; 