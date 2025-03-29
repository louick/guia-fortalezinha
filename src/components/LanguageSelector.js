import React from 'react';
import { ButtonGroup, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';

function LanguageSelector() {
  const { i18n } = useTranslation();

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <ButtonGroup variant="outlined" color="inherit" size="small">
      <Button onClick={() => handleLanguageChange('pt')}>PT</Button>
      <Button onClick={() => handleLanguageChange('en')}>EN</Button>
      <Button onClick={() => handleLanguageChange('es')}>ES</Button>
    </ButtonGroup>
  );
}

export default LanguageSelector;
