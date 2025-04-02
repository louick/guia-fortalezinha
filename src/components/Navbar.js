// src/components/Navbar.js
import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';

const { Header } = Layout;

export default function Navbar() {
  const location = useLocation();
  const [current, setCurrent] = useState(location.pathname);

  const handleClick = (e) => {
    setCurrent(e.key);
  };

  return (
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%', backgroundColor: '#1890ff' }}>
      <div style={{ color: '#fff', fontSize: '20px', fontWeight: 'bold', float: 'left', marginRight: '20px' }}>
        Guia de Fortalezinha
      </div>
      <Menu
        theme="dark"
        mode="horizontal"
        selectedKeys={[current]}
        onClick={handleClick}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="/">
          <Link to="/">Hospedagens</Link>
        </Menu.Item>
        <Menu.Item key="/transporte">
          <Link to="/transporte">Transporte</Link>
        </Menu.Item>
        <Menu.Item key="/como-chegar">
          <Link to="/como-chegar">Como Chegar</Link>
        </Menu.Item>

        <Menu.Item key="/lazer">
          <Link to="/lazer">Lazer</Link>
        </Menu.Item>
        <Menu.Item key="/galeria">
          <Link to="/galeria">Galeria</Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
}
