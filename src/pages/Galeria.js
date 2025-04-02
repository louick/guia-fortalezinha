// src/pages/Galeria.js
import React, { useState } from 'react';
import { Layout, Typography } from 'antd';
import { useSpring, animated } from '@react-spring/web';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import './Galeria.css';
import { ZoomInOutlined } from '@ant-design/icons';

const { Content } = Layout;
const { Title } = Typography;

// O primeiro item usa uma imagem da pasta public
const data = [
  { id: 1, image: '/galeria1.jpg' },
  { id: 2, image: '/galeria1.jpeg' },
  { id: 3, image: '/galeria3.jpg' },
  { id: 4, image: '/galeria4.jpg' },
  { id: 5, image: '/galeria5.jpg' },
  { id: 6, image: '/galeria6.jpg' },
  { id: 7, image: '/galeria7.jpg' },
  { id: 8, image: '/galeria8.jpg' },
  { id: 9, image: '/galeria9.jpg' },
  { id: 10, image: '/galeria10.jpg' }
];

function Galeria() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Cria um array de slides com as URLs das imagens
  const slides = data.map(item => ({ src: item.image }));

  const handleImageClick = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  // Animação de fade-in usando react-spring
  const fadeInProps = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 500 }
  });

  return (
    <Content style={{ padding: '24px', background: '#fff' }}>
      <animated.div style={fadeInProps}>
        <Title level={2}>Galeria de Fortalezinha</Title>
        <div className="gallery-grid">
          {data.map((item, index) => (
            <div key={item.id} className="gallery-item" onClick={() => handleImageClick(index)}>
              <img src={item.image} alt={`Imagem ${item.id}`} />
              <ZoomInOutlined className="overlay-icon" />
            </div>
          ))}
        </div>
        {lightboxOpen && (
          <Lightbox
            open={lightboxOpen}
            close={() => setLightboxOpen(false)}
            slides={slides}
            index={currentIndex}
          />
        )}
      </animated.div>
    </Content>
  );
}

export default Galeria;
