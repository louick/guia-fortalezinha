// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';
import MyHeader from './components/MyHeader';
import MyFooter from './components/MyFooter'; // Importa o footer personalizado
import Home from './pages/Home';
import ComoChegar from './pages/ComoChegar';
import Transporte from './pages/Transporte';
import Lazer from './pages/Lazer';
import Galeria from './pages/Galeria';
import RestaurantesNaPraia from './pages/RestaurantesNaPraia';

const { Content } = Layout;

function App() {
  return (
    <Router basename="/guia-fortalezinha">
      <Layout>
        <MyHeader />
        <Content style={{ padding: '24px', minHeight: 'calc(100vh - 64px)' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/como-chegar" element={<ComoChegar />} />
            <Route path="/transporte" element={<Transporte />} />
            <Route path="/lazer" element={<Lazer />} />
            <Route path="/galeria" element={<Galeria />} />
            <Route path="/restaurantes-na-praia" element={<RestaurantesNaPraia />} />
          </Routes>
        </Content>
        <MyFooter />
      </Layout>
    </Router>
  );
}

export default App;
