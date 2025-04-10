// src/components/MyHeader.js
import React, { useState } from 'react';
import { Layout, Menu, Button, Drawer } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import LanguageSelector from './LanguageSelector';
import { useTranslation } from 'react-i18next';

const { Header } = Layout;

function MyHeader() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  return (
    <Header
      style={{
        backgroundColor: '#ffffff',  // Fundo branco para o header
        height: '110px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 24px',
        position: 'relative',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
      }}
    >
      {/* Seletor de idioma à esquerda */}
      <div style={{ position: 'absolute', left: '24px', top: '50%', transform: 'translateY(-50%)' }}>
        <LanguageSelector />
      </div>

      {/* Logo centralizada */}
      <div style={{ marginTop: '5px' }}>
        <img 
          src={process.env.PUBLIC_URL + '/logo.png'} 
          alt={t('site_title')}
          style={{ height: '100px' }} 
        />
      </div>

      {/* Botão do menu (hambúrguer) no lado direito */}
      <div style={{ position: 'absolute', right: '24px', top: '50%', transform: 'translateY(-50%)' }}>
        <Button
          type="text"
          icon={<MenuOutlined style={{ color: '#333', fontSize: '28px' }} />}
          onClick={() => setOpen(true)}
        />
      </div>

      {/* Drawer para o menu mobile */}
      <Drawer
        placement="right"
        onClose={() => setOpen(false)}
        open={open}
        bodyStyle={{ padding: 0 }}
      >
        <Menu mode="vertical">
          <Menu.Item key="/">
            <Link to="/" onClick={() => setOpen(false)}>{t('hospedagens')}</Link>
          </Menu.Item>
          <Menu.Item key="/transporte">
            <Link to="/transporte" onClick={() => setOpen(false)}>{t('transporte')}</Link>
          </Menu.Item>
          <Menu.Item key="/como-chegar">
            <Link to="/como-chegar" onClick={() => setOpen(false)}>
              {t('como_chegar') || 'Como Chegar'}
            </Link>
          </Menu.Item>
          <Menu.Item key="/lazer">
            <Link to="/lazer" onClick={() => setOpen(false)}>{t('lazer')}</Link>
          </Menu.Item>
          <Menu.Item key="/galeria">
            <Link to="/galeria" onClick={() => setOpen(false)}>
              {t('galeria') || 'Galeria'}
            </Link>
          </Menu.Item>
          {/* Novo item para a página de Restaurantes na Praia */}
          <Menu.Item key="/restaurantes-na-praia">
            <Link to="/restaurantes-na-praia" onClick={() => setOpen(false)}>
              {t('restaurantes_na_praia') || 'Restaurantes na Praia'}
            </Link>
          </Menu.Item>
        </Menu>
      </Drawer>
    </Header>
  );
}

export default MyHeader;
