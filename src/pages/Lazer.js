// src/pages/Lazer.js
import React from 'react';
import { Layout, Typography, Card } from 'antd';

const { Content } = Layout;
const { Title, Paragraph } = Typography;

export default function Lazer() {
  return (
    <Layout style={{ padding: '24px', background: '#fff' }}>
      <Content style={{ maxWidth: '800px', margin: '0 auto' }}>
        <Title level={2}>Lazer</Title>
        <Card style={{ marginTop: '24px' }}>
          <Paragraph>
            Dicas de passeios, atividades e pontos turísticos para curtir em Fortalezinha...
          </Paragraph>
        </Card>
      </Content>
    </Layout>
  );
}
