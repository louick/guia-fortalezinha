// src/i18n.js
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
      lazer_text: "Dicas de passeios, atividades e pontos turísticos para curtir.",
      como_chegar: "Como Chegar",
      galeria: "Galeria",
      transporte_title: "Opções de Transporte para o 40 do Mocoóca",
      // Nós da página Como Chegar
      carroMoto_label1: "Saia de Belém ou Castanhal\n(Carros/Motos)",
      carroMoto_label2: "Chegue em Igarapé Acu",
      carroMoto_label3: "Defina '40 do Mocoóca' no GPS",
      carroMoto_label4: "Estacione em Mocoóca\n(estacionamento disponível)",
      carroMoto_label5: "Atravessa de barco por 3 min\npara a vila de Fortalezinha",
      van_label1: "Em Belém, utilize van na BR 316\n(saídas às 7h e 10h)",
      van_label2: "Chegue diretamente ao '40 do Mocoóca'",
      van_label3: "Atravessa de barco para a vila de Fortalezinha",
      destino_label: "Chegue ao hotel, seja feliz!",
      // Filtros da página Lazer
      todos: "Todos",
      programacoes: "Programações",
      passeios: "Passeios",
      atividades: "Atividades",
      // >>> Adicione as chaves do Kitesurf <<<
      kitesurf_title: "Aulas de Kitesurf",
      kitesurf_date: "Sábados e Domingos",
      kitesurf_description: "Aprenda os fundamentos do kitesurf com instrutores especializados. Essa experiência única proporciona a adrenalina e a liberdade de dominar os ventos e as ondas em Fortalezinha. Venha viver essa aventura e aproveite cada momento!"
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
      lazer_text: "Tips on tours, activities and tourist spots to enjoy.",
      como_chegar: "How to Get There",
      galeria: "Gallery",
      transporte_title: "Transportation Options for 40 do Mocoóca",
      // Nós da página Como Chegar
      carroMoto_label1: "Leave Belém or Castanhal\n(For Cars/Motorcycles)",
      carroMoto_label2: "Arrive at Igarapé Acu",
      carroMoto_label3: "Set '40 do Mocoóca' in your GPS",
      carroMoto_label4: "Park at Mocoóca\n(available parking)",
      carroMoto_label5: "Take a 3-min boat ride\nto Fortalezinha village",
      van_label1: "In Belém, take a van on BR 316\n(Departures at 7 AM and 10 AM)",
      van_label2: "Arrive directly at '40 do Mocoóca'",
      van_label3: "Take a boat ride to Fortalezinha village",
      destino_label: "Arrive at the hotel, be happy!",
      // Filtros da página Lazer
      todos: "All",
      programacoes: "Events",
      passeios: "Tours",
      atividades: "Activities",
      // >>> Chaves do Kitesurf <<<
      kitesurf_title: "Kitesurf Lessons",
      kitesurf_date: "Saturdays and Sundays",
      kitesurf_description: "Learn the fundamentals of kitesurfing with specialized instructors. This unique experience provides the adrenaline and freedom to master the winds and waves in Fortalezinha. Come and live this adventure and enjoy every moment!"
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
      lazer_text: "Consejos sobre tours, actividades y lugares turísticos para disfrutar.",
      como_chegar: "Cómo Llegar",
      galeria: "Galería",
      transporte_title: "Opciones de Transporte para el 40 do Mocoóca",
      // Nós da página Cómo Llegar
      carroMoto_label1: "Salga de Belém o Castanhal\n(Para autos/motocicletas)",
      carroMoto_label2: "Llegue a Igarapé Acu",
      carroMoto_label3: "Configure '40 do Mocoóca' en su GPS",
      carroMoto_label4: "Estacione en Mocoóca\n(con estacionamiento disponible)",
      carroMoto_label5: "Cruce en barco por 3 min\na la aldea de Fortalezinha",
      van_label1: "En Belém, tome una van en la BR 316\n(salidas a las 7 y a las 10)",
      van_label2: "Llegue directamente a '40 do Mocoóca'",
      van_label3: "Cruce en barco a la aldea de Fortalezinha",
      destino_label: "Llegue al hotel, ¡sé feliz!",
      // Filtros de Lazer
      todos: "Todos",
      programacoes: "Programaciones",
      passeios: "Tours",
      atividades: "Actividades",
      // >>> Chaves del Kitesurf <<<
      kitesurf_title: "Clases de Kitesurf",
      kitesurf_date: "Sábados y Domingos",
      kitesurf_description: "Aprende los fundamentos del kitesurf con instructores especializados. Esta experiencia única te brinda la adrenalina y la libertad de dominar los vientos y las olas en Fortalezinha. ¡Ven y vive esta aventura y disfruta cada momento!"
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
