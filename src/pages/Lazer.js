// src/pages/Lazer.js
import React from 'react';
import { Row, Col, Card, Typography, Button } from 'antd';
import { WhatsAppOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

const { Title, Text } = Typography;

export default function Lazer() {
  const { t } = useTranslation();

  // Dados do Kitesurf
  const kitesurfData = {
    title: t('kitesurf_title'),
    date: t('kitesurf_date'),
    description: t('kitesurf_description'),
    video: process.env.PUBLIC_URL + '/kitesurf.mp4',
  };

  // Função para abrir o WhatsApp (número fictício)
  const openWhatsApp = () => {
    const phone = '559999999999'; // Número fictício
    const message = encodeURIComponent(t('whatsapp_message'));
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  return (
    <div style={{ padding: '24px' }}>
      {/* Título da página e texto de introdução */}
      <Title level={2}>{t('lazer')}</Title>
      <Text>{t('lazer_text')}</Text>

      {/* Card único para Aulas de Kitesurf */}
      <Row justify="center" style={{ marginTop: '24px' }}>
        <Col xs={24} sm={24} md={16} lg={12} xl={8}>
          <Card
            hoverable
            style={{
              borderRadius: 8,
              maxWidth: 600,     // Limite de largura para o card
              margin: '0 auto', // Centraliza horizontalmente
            }}
            cover={
              <video
                controls
                style={{
                  width: '100%',
                  height: '250px',     // Ajuste a altura do vídeo
                  objectFit: 'cover',
                  borderTopLeftRadius: 8,
                  borderTopRightRadius: 8,
                }}
              >
                <source src={kitesurfData.video} type="video/mp4" />
                {t('browser_video_support') || "Seu navegador não suporta vídeos."}
              </video>
            }
          >
            <Title level={4}>{kitesurfData.title}</Title>
            <Text strong>{kitesurfData.date}</Text>
            <Text style={{ display: 'block', marginTop: 16 }}>
              {kitesurfData.description}
            </Text>

            <Button
              type="primary"
              icon={<WhatsAppOutlined />}
              onClick={openWhatsApp}
              style={{
                backgroundColor: '#25D366',
                borderColor: '#25D366',
                fontWeight: 'bold',
                marginTop: 16,
              }}
            >
              {t('whatsapp')}
            </Button>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
