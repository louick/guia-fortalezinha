import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  pt: {
    translation: {
      site_title: "Guia de Fortalezinha",
      hospedagens: "Hospedagens",
      transporte: "Transporte",
      lazer: "Lazer",
      mais_detalhes: "Mais detalhes",
      menos_detalhes: "Menos detalhes",
      categoria: "Categoria",
      telefones: "Telefones",
      contato: "Contato",
      falar_com: "Falar com",
      instagram: "Instagram",
      facebook: "Facebook",
      whatsapp: "WhatsApp",
      whatsapp_message: "Olá! Vi sua hospedagem no Guia de Fortalezinha e fiquei muito interessado. Poderia me enviar mais informações? Obrigado!",
      transporte_text: "Aqui você encontrará informações sobre como chegar e se locomover.",
      lazer_text: "Dicas de passeios, atividades e pontos turísticos para curtir."
    }
  },
  en: {
    translation: {
      site_title: "Fortalezinha Guide",
      hospedagens: "Accommodations",
      transporte: "Transportation",
      lazer: "Leisure",
      mais_detalhes: "More details",
      menos_detalhes: "Less details",
      categoria: "Category",
      telefones: "Phones",
      contato: "Contact",
      falar_com: "Talk to",
      instagram: "Instagram",
      facebook: "Facebook",
      whatsapp: "WhatsApp",
      whatsapp_message: "Hello! I saw your accommodation on the Fortalezinha Guide and I'm very interested. Could you send me more information? Thank you!",
      transporte_text: "Here you will find information on how to get around.",
      lazer_text: "Tips on tours, activities and tourist spots to enjoy."
    }
  },
  es: {
    translation: {
      site_title: "Guía de Fortalezinha",
      hospedagens: "Alojamientos",
      transporte: "Transporte",
      lazer: "Ocio",
      mais_detalhes: "Más detalles",
      menos_detalhes: "Menos detalles",
      categoria: "Categoría",
      telefones: "Teléfonos",
      contato: "Contacto",
      falar_com: "Hablar con",
      instagram: "Instagram",
      facebook: "Facebook",
      whatsapp: "WhatsApp",
      whatsapp_message: "¡Hola! Vi su alojamiento en la Guía de Fortalezinha y estoy muy interesado. ¿Podría enviarme más información? ¡Gracias!",
      transporte_text: "Aquí encontrarás información sobre cómo llegar y moverte.",
      lazer_text: "Consejos sobre tours, actividades y lugares turísticos para disfrutar."
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'pt', // Idioma padrão
    fallbackLng: 'pt',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
