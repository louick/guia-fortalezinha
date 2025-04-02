// src/pages/Home.js
import React, { useState, useMemo } from 'react';
import { Layout, Input, Menu, Row, Col, Card, Typography, Button } from 'antd';
import { WhatsAppOutlined, GlobalOutlined, CameraOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import lodgingsData from '../data/lodgings';
import ImageCarousel from '../components/ImageCarousel';

const { Content } = Layout;
const { Title, Text } = Typography;

export default function Home() {
  const { t } = useTranslation();
  const [lodgings, setLodgings] = useState(lodgingsData);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const categories = useMemo(() => {
    const allCats = lodgingsData.flatMap(lodge =>
      lodge.category.split(',').map(cat => cat.trim())
    );
    return ['Todos', ...Array.from(new Set(allCats))];
  }, []);

  const filteredLodgings = lodgings.filter(lodge => {
    const matchesSearch = lodge.title.toLowerCase().includes(searchTerm.toLowerCase());
    const lodgeCats = lodge.category.split(',').map(cat => cat.trim().toLowerCase());
    return matchesSearch && (selectedCategory === 'Todos' || lodgeCats.includes(selectedCategory.toLowerCase()));
  });

  const toggleDetails = (id) => {
    setLodgings(prev =>
      prev.map(l => (l.id === id ? { ...l, showDetails: !l.showDetails } : l))
    );
  };

  // Regex flexível para capturar números de telefone
  const phoneRegex = /(\+?\d[\d()\s-]+)/g;

  const getWhatsAppNumber = (details) => {
    const contactField = details.find(d =>
      d.label === 'Contato' || d.label === 'Telefones'
    );
    if (!contactField) return null;

    const phoneMatches = contactField.value.match(phoneRegex);
    if (!phoneMatches) return null;

    const whatsappNumber = phoneMatches.find(num =>
      contactField.value.toLowerCase().includes('whatsapp')
    ) || phoneMatches[0];

    return whatsappNumber.replace(/\D/g, '');
  };

  const openWhatsApp = (number) => {
    const message = encodeURIComponent(t('whatsapp_message'));
    window.open(`https://wa.me/${number}?text=${message}`, '_blank');
  };

  const renderDetailLine = (detail) => {
    if (detail.link) {
      const linkLower = detail.link.toLowerCase();
      if (linkLower.includes('facebook.com')) {
        return (
          <Button
            key={detail.link}
            type="primary"
            style={{ margin: '4px 0', backgroundColor: '#3b5998', borderColor: '#3b5998' }}
            icon={<GlobalOutlined />}
            onClick={() => window.open(detail.link, '_blank')}
          >
            {t('facebook')}
          </Button>
        );
      } else if (linkLower.includes('instagram.com')) {
        return (
          <Button
            key={detail.link}
            type="primary"
            style={{ margin: '4px 0', backgroundColor: '#E1306C', borderColor: '#E1306C' }}
            icon={<CameraOutlined />}
            onClick={() => window.open(detail.link, '_blank')}
          >
            {t('instagram')}
          </Button>
        );
      } else {
        return (
          <a
            key={detail.link}
            href={detail.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'block', margin: '4px 0' }}
          >
            <strong>{detail.label}:</strong> {detail.value}
          </a>
        );
      }
    } else {
      return (
        <Text key={detail.label} style={{ display: 'block', margin: '4px 0' }}>
          <strong>{detail.label}:</strong> {detail.value}
        </Text>
      );
    }
  };

  return (
    <Content style={{ width: '100%' }}>
      <Title level={2}>{t('hospedagens')}</Title>
      <Input.Search
        placeholder="Buscar hospedagem..."
        onSearch={setSearchTerm}
        style={{ marginBottom: '16px' }}
        allowClear
      />
      <Menu
        mode="horizontal"
        selectedKeys={[selectedCategory]}
        onClick={({ key }) => setSelectedCategory(key)}
      >
        {categories.map(cat => (
          <Menu.Item key={cat}>{cat}</Menu.Item>
        ))}
      </Menu>
      <Row gutter={[16, 16]} style={{ marginTop: '16px' }}>
        {filteredLodgings.map(lodge => {
          const whatsappNumber = getWhatsAppNumber(lodge.details);
          return (
            <Col xs={24} sm={12} md={8} lg={6} key={lodge.id}>
              <Card
                hoverable
                cover={
                  lodge.images?.length > 1 ? (
                    <ImageCarousel images={lodge.images} />
                  ) : (
                    <img
                      alt={lodge.title}
                      src={lodge.images[0]}
                      style={{ height: '200px', objectFit: 'cover', width: '100%' }}
                    />
                  )
                }
                actions={[
                  <Button
                    type="link"
                    onClick={() => toggleDetails(lodge.id)}
                    key="details"
                  >
                    {lodge.showDetails ? t('menos_detalhes') : t('mais_detalhes')}
                  </Button>,
                  whatsappNumber && (
                    <Button
                      type="primary"
                      icon={<WhatsAppOutlined />}
                      onClick={() => openWhatsApp(whatsappNumber)}
                      style={{
                        background: '#25D366',
                        borderColor: '#25D366',
                        fontWeight: 'bold'
                      }}
                      key="whatsapp"
                    >
                      {t('whatsapp')}
                    </Button>
                  )
                ].filter(Boolean)}
              >
                <Card.Meta
                  title={lodge.title}
                  description={<Text type="secondary">{t('categoria')}: {lodge.category}</Text>}
                />
                {lodge.showDetails && (
                  <div style={{ marginTop: '8px' }}>
                    {lodge.details.map((detail, idx) => renderDetailLine(detail))}
                  </div>
                )}
              </Card>
            </Col>
          );
        })}
      </Row>
    </Content>
  );
}
