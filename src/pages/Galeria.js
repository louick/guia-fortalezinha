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

// Atualização: utilizando process.env.PUBLIC_URL para referenciar as imagens na pasta public.
const data = [
  { id: 1, image: process.env.PUBLIC_URL + '/galeria1.jpg' },
  { id: 2, image: process.env.PUBLIC_URL + '/galeria1.jpeg' },
  { id: 3, image: process.env.PUBLIC_URL + '/galeria3.jpg' },
  { id: 4, image: process.env.PUBLIC_URL + '/galeria4.jpg' },
  { id: 5, image: process.env.PUBLIC_URL + '/galeria5.jpg' },
  { id: 6, image: process.env.PUBLIC_URL + '/galeria6.jpg' },
  { id: 7, image: process.env.PUBLIC_URL + '/galeria7.jpg' },
  { id: 8, image: process.env.PUBLIC_URL + '/galeria8.jpg' },
  { id: 9, image: process.env.PUBLIC_URL + '/galeria9.jpg' },
  { id: 10, image: process.env.PUBLIC_URL + '/galeria10.jpg' }
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
