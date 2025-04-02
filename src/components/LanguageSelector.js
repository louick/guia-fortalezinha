// src/components/LanguageSelector.js
import React from 'react';
import { Button, Space } from 'antd';
import i18n from '../i18n';

const LanguageSelector = () => {
  const handleChange = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <Space>
      <Button 
        type="link" 
        onClick={() => handleChange('pt')}
        style={{ color: '#333', textDecoration: 'none', padding: 0, fontSize: '20px' }}
      >
        🇧🇷
      </Button>
      <Button 
        type="link" 
        onClick={() => handleChange('en')}
        style={{ color: '#333', textDecoration: 'none', padding: 0, fontSize: '20px' }}
      >
        🇬🇧
      </Button>
      <Button 
        type="link" 
        onClick={() => handleChange('es')}
        style={{ color: '#333', textDecoration: 'none', padding: 0, fontSize: '20px' }}
      >
        🇪🇸
      </Button>
    </Space>
  );
};

export default LanguageSelector;
