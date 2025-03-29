// src/components/MyHeader.js
import React, { useState } from 'react';
import { Layout, Menu, Button, Drawer } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Header } = Layout;

function MyHeader() {
  const [open, setOpen] = useState(false);

  return (
    <Header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 24px' }}>
      <div style={{ color: '#fff', fontWeight: 'bold', fontSize: '20px' }}>
        Guia de Fortalezinha
      </div>
      <Button
        type="text"
        icon={<MenuOutlined style={{ color: '#fff', fontSize: '20px' }} />}
        onClick={() => setOpen(true)}
      />
      <Drawer
        placement="right"
        onClose={() => setOpen(false)}
        open={open}
        bodyStyle={{ padding: 0 }}
      >
        <Menu mode="vertical">
          <Menu.Item key="/">
            <Link to="/" onClick={() => setOpen(false)}>Hospedagens</Link>
          </Menu.Item>
          <Menu.Item key="/transporte">
            <Link to="/transporte" onClick={() => setOpen(false)}>Transporte</Link>
          </Menu.Item>
          
          <Menu.Item key="/como-chegar">
            <Link to="/como-chegar" onClick={() => setOpen(false)}>Como Chegar</Link>
          </Menu.Item>

          <Menu.Item key="/lazer">
            <Link to="/lazer" onClick={() => setOpen(false)}>Lazer</Link>
          </Menu.Item>
          <Menu.Item key="/galeria">
            <Link to="/galeria" onClick={() => setOpen(false)}>Galeria</Link>
          </Menu.Item>
        </Menu>
      </Drawer>
    </Header>
  );
}

export default MyHeader;
