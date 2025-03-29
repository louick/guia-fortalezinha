// src/pages/Transporte.js
import React from 'react';
import { Card, Row, Col, Button } from 'antd';
import { PhoneOutlined } from '@ant-design/icons';

// Defina o array de motoristas com telefone de exibição e número limpo para o WhatsApp
const motoristas = [
  {
    id: 1,
    nome: 'Anderson',
    telefone: '+55 91 98022-2101',
    whatsNumber: '5591980222101', // para usar no link do WhatsApp (sem espaços e símbolos)
    imagem: process.env.PUBLIC_URL + '/van1.jpg',
  },
  {
    id: 2,
    nome: 'Werlisson',
    telefone: '+55 91 98892-0356',
    whatsNumber: '5591988920356',
    imagem: process.env.PUBLIC_URL + '/van2.jpg',
  },
];

function Transporte() {
  return (
    <div style={{ padding: '24px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '24px' }}>
        Opções de Transporte para o 40 do Mocoóca
      </h2>
      <Row gutter={[16, 16]} justify="center">
        {motoristas.map((motorista) => (
          <Col key={motorista.id}>
            <Card
              hoverable
              style={{
                width: 300,
                minHeight: 420,
                borderRadius: 8,
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
              cover={
                <img
                  alt={motorista.nome}
                  src={motorista.imagem}
                  style={{
                    height: 200,
                    width: '100%',
                    objectFit: 'cover',
                    borderTopLeftRadius: 8,
                    borderTopRightRadius: 8,
                  }}
                />
              }
            >
              <div>
                <h3 style={{ marginBottom: 8 }}>{motorista.nome}</h3>
                <p style={{ marginBottom: 16, color: '#555' }}>{motorista.telefone}</p>
              </div>
              <div>
                <Button
                  type="primary"
                  icon={<PhoneOutlined />}
                  onClick={() =>
                    window.open(`https://wa.me/${motorista.whatsNumber}`, '_blank')
                  }
                >
                  WhatsApp
                </Button>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Transporte;
