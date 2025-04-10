// src/pages/RestaurantesNaPraia.js
import React, { useState } from 'react';
import { Layout, Card, Typography, Button, Space, Modal } from 'antd';
import { WhatsAppOutlined, InfoCircleOutlined, FullscreenOutlined } from '@ant-design/icons';
import ImageCarousel from '../components/ImageCarousel';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const { Header, Content, Footer } = Layout;
const { Title, Paragraph } = Typography;

export default function RestaurantesNaPraia() {
  const [openGallery, setOpenGallery] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

  // Dados do restaurante Americana Beach
  const americanaBeach = {
    title: "Americana Beach",
    category: "Restaurante na Praia",
    images: [
      process.env.PUBLIC_URL + '/americana1.jpg',
      process.env.PUBLIC_URL + '/americana2.jpg',
      process.env.PUBLIC_URL + '/americana3.jpg',
      process.env.PUBLIC_URL + '/americana4.jpg'
    ],
    details: [
      { label: "Telefone", value: "+55 91 99207-1485" }
    ],
    description:
`O Americana Beach oferece uma experiência única à beira-mar, combinando pratos frescos com um ambiente descontraído e uma vista panorâmica para o oceano.

Para pedidos e reservas, entre em contato pelo telefone acima ou clique em "Ver Cardápio" para conferir nosso menu exclusivo.`
  };

  // Cardápio do Americana Beach (texto formatado)
  const menuText =
`-- PORÇÕES --
Arroz .......................................... R$ 10,00
Feijão ......................................... R$ 10,00
Farofa ......................................... R$ 10,00
Vinagrete .................................. R$ 7,00

-- BEBIDAS --
Cerveja 600ml .......................... R$ 13,00
Heineken Long Neck ............. R$ 12,00
Budweiser Long Neck .......... R$ 12,00
Ice ................................................ R$ 10,00
Coca Cola (1L) ......................... R$ 10,00
Coca Cola Lata ......................... R$ 6,00
Água Mineral Pequena .......... R$ 5,00
Água Mineral (1,5L) ................ R$ 8,00
Coco Gelado ............................... R$ 5,00

-- PETISCOS --
Camarão ao alho e óleo (com farofa e vinagrete) ............ R$ 55,00
Camarão empanado (com farofa e molho rosé) ................. R$ 60,00
Sarnambi (com farofa e vinagrete) ............................. R$ 35,00
Caranguejo (5 unid., com farofa e vinagrete) ................ R$ 35,00
Pratiqueira (5 unid., com farofa e vinagrete) ................. R$ 35,00
Gô (com farofa e vinagrete) .................................... R$ 35,00
Calabresa acebolada (com farofa) .............................. R$ 35,00
Macaxeira frita (com molho rosé) ............................. R$ 25,00
Queijo ......................................................... R$ 25,00
Queijo com azeitonas .......................................... R$ 35,00
Queijo com calabresa .......................................... R$ 45,00

-- REFEIÇÕES --
Camarão ao alho e óleo (acompanha arroz, feijão, vinagrete e farofa) ..... R$ 80,00
Pratiqueira frita (acompanha arroz, feijão, vinagrete e farofa) ............ R$ 60,00
Gô frita (acompanha arroz, feijão, vinagrete e farofa) ...................... R$ 60,00
Bife à cavalo (acompanha arroz, feijão, ovo, farofa e macaxeira) ........... R$ 80,00
Bife acebolado (acompanha arroz, feijão e farofa) ........................ R$ 75,00
Bife com macaxeira frita (acompanha arroz, feijão e farofa) ............... R$ 75,00
Filé de frango frito na chapa (acompanha arroz, feijão e farofa) ........... R$ 65,00
Frango empanado (acompanha arroz, feijão e farofa) ........................ R$ 70,00
Caldeirada à moda da casa (acompanha legumes, ovos, arroz e pirão) ........ R$ 120,00
Chapa mista (carne, camarão, calabresa, frango, peixe, arroz, feijão, macaxeira frita e farofa)  R$ 150,00
`;

  return (
    <Layout>
      <Header style={{ backgroundColor: '#fff', padding: '0 24px' }}>
        <Title level={3} style={{ margin: 0 }}>Restaurantes na Praia</Title>
      </Header>
      <Content style={{ padding: '24px', display: 'flex', justifyContent: 'center' }}>
        <Card
          hoverable
          title={americanaBeach.title}
          extra={<span>{americanaBeach.category}</span>}
          style={{ maxWidth: 400 }}
          cover={
            <div style={{ position: 'relative' }}>
              <ImageCarousel images={americanaBeach.images} />
              <Button
                type="default"
                size="small"
                icon={<FullscreenOutlined />}
                style={{
                  position: 'absolute',
                  top: 8,
                  right: 8,
                  zIndex: 10
                }}
                onClick={() => setOpenGallery(true)}
              >
                Ver Todas as Fotos
              </Button>
            </div>
          }
          actions={[
            <Space key="actions" size="small" wrap>
              <Button
                type="default"
                size="small"
                icon={<InfoCircleOutlined />}
                onClick={() => setMenuVisible(true)}
              >
                Ver Cardápio
              </Button>
              <Button
                type="default"
                size="small"
                icon={<WhatsAppOutlined style={{ color: '#25D366' }} />}
                onClick={() =>
                  window.open(`https://wa.me/5591992071485`, '_blank')
                }
              >
                WhatsApp
              </Button>
            </Space>
          ]}
        >
          <Paragraph style={{ whiteSpace: 'pre-line' }}>
            {americanaBeach.description}
          </Paragraph>
          <div style={{ marginTop: '16px' }}>
            {americanaBeach.details.map((detail) => (
              <Paragraph key={detail.label} style={{ margin: '4px 0' }}>
                <strong>{detail.label}:</strong> {detail.value}
              </Paragraph>
            ))}
          </div>
        </Card>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        © {new Date().getFullYear()} Americana Beach
      </Footer>

      {openGallery && (
        <Lightbox
          open={openGallery}
          close={() => setOpenGallery(false)}
          slides={americanaBeach.images.map(img => ({ src: img }))}
        />
      )}

      <Modal
        title="Cardápio - Americana Beach"
        open={menuVisible}
        onCancel={() => setMenuVisible(false)}
        footer={[
          <Button key="close" type="default" onClick={() => setMenuVisible(false)}>
            Fechar
          </Button>
        ]}
        width={600}
      >
        <Paragraph style={{ whiteSpace: 'pre-line' }}>
          {menuText}
        </Paragraph>
      </Modal>
    </Layout>
  );
}
