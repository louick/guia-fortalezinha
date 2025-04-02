// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';
import MyHeader from './components/MyHeader';
import Home from './pages/Home';
import ComoChegar from './pages/ComoChegar'; // nova rota para "Como Chegar"
import Transporte from './pages/Transporte';
import Lazer from './pages/Lazer';
import Galeria from './pages/Galeria';

const { Content, Footer } = Layout;

function App() {
  return (
    <Router>
      <Layout>
        <MyHeader />
        <Content style={{ padding: '24px', minHeight: 'calc(100vh - 64px)' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/como-chegar" element={<ComoChegar />} />
            <Route path="/transporte" element={<Transporte />} />
            <Route path="/lazer" element={<Lazer />} />
            <Route path="/galeria" element={<Galeria />} />
          </Routes>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Guia de Fortalezinha ©2025
        </Footer>
      </Layout>
    </Router>
  );
}

export default App;
