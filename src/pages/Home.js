// src/pages/Home.js
import React, { useState, useMemo } from 'react';
import { Layout, Input, Menu, Row, Col, Card, Typography, Button, Space } from 'antd';
import { WhatsAppOutlined, GlobalOutlined, CameraOutlined, FullscreenOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import lodgingsData from '../data/lodgings';
import ImageCarousel from '../components/ImageCarousel';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const { Content } = Layout;
const { Title, Text, Paragraph } = Typography;

export default function Home() {
  const { t } = useTranslation();

  // Estado para pesquisa, seleção de categoria, detalhes abertos e galeria (lightbox) aberta
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [openDetails, setOpenDetails] = useState({});
  const [openGallery, setOpenGallery] = useState({});

  // Cria as categorias disponíveis (ex.: Todos, Pousada, Casa de Aluguel, etc.)
  const categories = useMemo(() => {
    const allCats = lodgingsData.flatMap(lodge =>
      lodge.category.split(',').map(cat => cat.trim())
    );
    return ['Todos', ...Array.from(new Set(allCats))];
  }, []);

  // Filtra as hospedagens de acordo com o termo de busca e a categoria selecionada
  const filteredLodgings = lodgingsData.filter(lodge => {
    const matchesSearch = lodge.title.toLowerCase().includes(searchTerm.toLowerCase());
    const lodgeCats = lodge.category.split(',').map(cat => cat.trim().toLowerCase());
    return matchesSearch && (selectedCategory === 'Todos' || lodgeCats.includes(selectedCategory.toLowerCase()));
  });

  // Abre/fecha detalhes de cada hospedagem
  const toggleDetails = (id) => {
    setOpenDetails(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Expressão regular para capturar números de telefone
  const phoneRegex = /(\+?\d[\d()\s-]+)/g;

  // Extrai número de WhatsApp (se houver) das informações de detalhe
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

  // Abre link do WhatsApp com mensagem padrão
  const openWhatsApp = (number) => {
    const message = encodeURIComponent(t('whatsapp_message'));
    window.open(`https://wa.me/${number}?text=${message}`, '_blank');
  };

  // Renderiza cada linha de detalhe, preservando quebras de linha.
  const renderDetailLine = (detail) => {
    if (detail.link) {
      const linkLower = detail.link.toLowerCase();
      if (linkLower.includes('facebook.com')) {
        return (
          <Button
            key={detail.link}
            type="primary"
            size="small"
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
            size="small"
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
    }
    return (
      <div key={detail.label} style={{ margin: '8px 0' }}>
        <Typography.Text strong style={{ display: 'block' }}>
          {detail.label}
        </Typography.Text>
        <Typography.Text style={{ whiteSpace: 'pre-line' }}>
          {detail.value}
        </Typography.Text>
      </div>
    );
  };

  return (
    <Content style={{ width: '100%' }}>
      <Title level={2} style={{ marginTop: '16px' }}>
        {t('hospedagens')}
      </Title>

      <Input.Search
        placeholder="Buscar hospedagem..."
        onSearch={setSearchTerm}
        style={{ marginBottom: '16px', maxWidth: '400px' }}
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
          const isDetailsOpen = !!openDetails[lodge.id];
          const whatsappNumber = getWhatsAppNumber(lodge.details);

          // Prepara o cover do Card
          const cover = lodge.images?.length > 1
            ? <ImageCarousel images={lodge.images} />
            : (
              <img
                alt={lodge.title}
                src={lodge.images[0]}
                style={{ height: '200px', objectFit: 'cover', width: '100%' }}
              />
            );

          // Monta os botões de ação de forma unificada em um <Space>
          const actionButtons = (
            <Space key="actions" size="small" wrap style={{ justifyContent: 'center' }}>
              <Button
                type="default"
                size="small"
                icon={<InfoCircleOutlined />}
                onClick={() => toggleDetails(lodge.id)}
              >
                {isDetailsOpen ? t('menos_detalhes') : t('detalhes')}
              </Button>

              {lodge.images && lodge.images.length > 1 && (
                <Button
                  type="default"
                  size="small"
                  icon={<FullscreenOutlined />}
                  onClick={() => setOpenGallery(prev => ({ ...prev, [lodge.id]: true }))}
                >
                  {t('fotos')}
                </Button>
              )}

              {whatsappNumber && (
                <Button
                  type="default"
                  size="small"
                  icon={<WhatsAppOutlined style={{ color: '#25D366' }} />}
                  onClick={() => openWhatsApp(whatsappNumber)}
                >
                  WhatsApp
                </Button>
              )}
            </Space>
          );

          return (
            <Col xs={24} sm={12} md={8} lg={6} key={lodge.id}>
              <Card
                hoverable
                cover={cover}
                actions={[actionButtons]}
              >
                <Card.Meta
                  title={lodge.title}
                  description={<Text type="secondary">{t('categoria')}: {lodge.category}</Text>}
                />
                {isDetailsOpen && (
                  <div style={{ marginTop: '8px' }}>
                    {lodge.details.map(detail => renderDetailLine(detail))}
                    {lodge.description && (
                      <Paragraph style={{ whiteSpace: 'pre-line', marginTop: '8px' }}>
                        {lodge.description}
                      </Paragraph>
                    )}
                  </div>
                )}
              </Card>

              {lodge.images?.length > 0 && openGallery[lodge.id] && (
                <Lightbox
                  open={true}
                  close={() => setOpenGallery(prev => ({ ...prev, [lodge.id]: false }))}
                  slides={lodge.images.map(img => ({ src: img }))}
                />
              )}
            </Col>
          );
        })}
      </Row>
    </Content>
  );
}
