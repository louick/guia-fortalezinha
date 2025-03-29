import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ImageModal from './ImageModal';

function ImageCarousel({ images }) {
  const [openModal, setOpenModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true
  };

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedImage('');
  };

  return (
    <>
      <Slider {...settings}>
        {images.map((url, index) => (
          <div 
            key={index} 
            onClick={() => handleImageClick(url)} 
            style={{ cursor: 'pointer' }}
          >
            <img 
              src={url} 
              alt={`Imagem ${index + 1}`} 
              style={{ 
                width: '100%', 
                height: '200px',      // Altura fixa para manter harmonia
                objectFit: 'cover'    // Recorta a imagem para preencher
              }} 
            />
          </div>
        ))}
      </Slider>

      {/* Modal para expandir a imagem */}
      <ImageModal 
        open={openModal} 
        handleClose={handleCloseModal} 
        imageUrl={selectedImage} 
      />
    </>
  );
}

export default ImageCarousel;
