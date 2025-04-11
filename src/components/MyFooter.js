// src/components/MyFooter.js
import React from 'react';
import { Layout, Typography, Space } from 'antd';
import { InstagramFilled, WhatsAppOutlined } from '@ant-design/icons';

const { Footer } = Layout;
const { Text } = Typography;

function MyFooter() {
  return (
    <Footer 
      style={{
        backgroundColor: '#f0f2f5',
        textAlign: 'center',
        padding: '24px'
      }}
    >
      <Space direction="vertical" size="small">
        <Text strong style={{ fontSize: '16px' }}>Guia de Fortalezinha</Text>
        <Text style={{ fontSize: '14px' }}>Desenvolvido por Louick Andrade</Text>
        <Space size="middle">
          <a
            href="https://www.instagram.com/louick.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramFilled style={{ fontSize: '20px', color: '#E1306C' }} />
          </a>
          <a
            href="https://wa.me/5591985735084?text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20o%20Guia%20de%20Fortalezinha."
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppOutlined style={{ fontSize: '20px', color: '#25D366' }} />
          </a>
        </Space>
        <Text type="secondary" style={{ fontSize: '14px' }}>
          © {new Date().getFullYear()} Guia de Fortalezinha. Todos os direitos reservados.
        </Text>
      </Space>
    </Footer>
  );
}

export default MyFooter;
