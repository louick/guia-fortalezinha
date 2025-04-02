// src/data/lodgings.js

const lodgings = [
  // MANTIDOS COM 4 IMAGENS LOCAIS
  {
    id: 1,
    title: "Pousada Ilha Maian",
    category: "Pousada",
    images: [
      process.env.PUBLIC_URL + '/ilha maian.jpg',
      process.env.PUBLIC_URL + '/ilha maian2.jpg',
      process.env.PUBLIC_URL + '/ilha maian3.jpg',
      process.env.PUBLIC_URL + '/ilha maian4.jpg'
    ],
    showDetails: false,
    details: [
      { label: "Telefones", value: "(91) 99914-8577, (91) 98751-6243" },
      { label: "Instagram", value: "@pousada_ilha_maian", link: "https://instagram.com/pousada_ilha_maian" },
      { label: "Facebook", value: "facebook.com/pousadailhamainan/", link: "https://facebook.com/pousadailhamainan" }
    ]
  },
  {
    id: 2,
    title: "Casa do Carimbó",
    category: "Pousada, Bar e Restaurante",
    images: [
      process.env.PUBLIC_URL + '/cada do carimbo.jpg',
      process.env.PUBLIC_URL + '/casa do carimbo2.jpg',
      process.env.PUBLIC_URL + '/casa do carimbo3.jpg',
      process.env.PUBLIC_URL + '/casa do carimbo4.jpg'
    ],
    showDetails: false,
    details: [
      { label: "Contato", value: "+34 647654088 (Gala), (91) 98301-0138 (Catitu)" },
      { label: "Instagram", value: "@casadocarimbofortalezinha", link: "https://instagram.com/casadocarimbofortalezinha" },
      { label: "Facebook", value: "facebook.com/casadocarimbofortalezinha/", link: "https://facebook.com/casadocarimbofortalezinha" }
    ]
  },
  {
    id: 6,
    title: "Estalagem A Casa do Caminho",
    category: "Pousada",
    images: [
      process.env.PUBLIC_URL + '/casa do caminho.jpg',
      process.env.PUBLIC_URL + '/casa do caminho2.jpg',
      process.env.PUBLIC_URL + '/casa do caminho3.jpg',
      process.env.PUBLIC_URL + '/casa do caminho4.jpg'
    ],
    showDetails: false,
    details: [
      { label: "Contato", value: "(91) 99907-0658 (Guilherme)" },
      { label: "Instagram", value: "@estalagemacasadocaminho", link: "https://instagram.com/estalagemacasadocaminho" },
      { label: "Facebook", value: "facebook.com/estalagemacasadocaminho", link: "https://facebook.com/estalagemacasadocaminho" }
    ]
  },
  {
    id: 7,
    title: "Pousada Violeta",
    category: "Pousada",
    images: [
      process.env.PUBLIC_URL + '/pousada violeta.jpg',
      process.env.PUBLIC_URL + '/pousada violeta2.jpg',
      process.env.PUBLIC_URL + '/pousada violeta3.jpg',
      process.env.PUBLIC_URL + '/pousada violeta4.jpg'
    ],
    showDetails: false,
    details: [
      { label: "Contato", value: "(91) 98122-5316" }
    ]
  },

  // TINHAM 1 IMAGEM => ADICIONAMOS 3, MANTENDO A BARRA E EVITANDO 404
  {
    id: 3,
    title: "Casa pra Alugar",
    category: "Casa de Aluguel",
    images: [
      "/casa pra alugar.jpg"
    ],
    showDetails: false,
    details: [
      { label: "Contato", value: "980357296 (WhatsApp), 993392246 (Ligação)" },
      { label: "Falar Com", value: "Dhiego" },
      { label: "Instagram", value: "@dhiego_castelo", link: "https://instagram.com/dhiego_castelo" }
    ]
  },
  {
    id: 4,
    title: "Casa pra Alugar",
    category: "Casa de Aluguel",
    images: [
      "/casa pra alugar2.jpg"
    ],
    showDetails: false,
    details: [
      { label: "Contato", value: "(91) 98212-2385" },
      { label: "Falar Com", value: "Silva Wenderson" },
      { label: "Facebook", value: "facebook.com/casadocarimbofortalezinha/", link: "https://facebook.com/casadocarimbofortalezinha" }
    ]
  },
  {
    id: 5,
    title: "Doce Lar Camping – Casa pra Alugar",
    category: "Casa de Aluguel / Camping",
    images: [
      "/doce lar.jpg"
    ],
    showDetails: false,
    details: [
      { label: "Contato", value: "(91) 99176-3186" },
      { label: "Falar Com", value: "Lili ou Nayane" }
    ]
  },
  {
    id: 9,
    title: "Casa de Aluguel",
    category: "Casa de Aluguel",
    images: [
      "/casa para alugar3.jpg"
    ],
    showDetails: false,
    details: [
      { label: "Contato", value: "(91) 99148-9294" },
      { label: "Facebook", value: "facebook.com/profile.php?id=100013412522700", link: "https://facebook.com/profile.php?id=100013412522700" }
    ]
  },
  {
    id: 10,
    title: "Espaço para Camping / Redário e Barraca",
    category: "Camping / Redário",
    images: [
      "/camping redario.jpg"
    ],
    showDetails: false,
    details: [
      { label: "Contato", value: "(91) 99374-2014 (Ronny)" },
      { label: "Facebook", value: "facebook.com/ronny.souza.5815", link: "https://facebook.com/ronny.souza.5815" }
    ]
  },
  {
    id: 14,
    title: "Pousada Ariramba",
    category: "Pousada",
    images: [
      "/ariramba1.jpg",
      "/ariramba2.jpg",
      "/ariramba3.jpg"

],
    showDetails: false,
    details: [
      { label: "Contato", value: "(91) 98227-1694" },
      { label: "Instagram", value: "@arirambafortalezinha", link: "https://instagram.com/arirambafortalezinha" }
    ]
  },
  {
    id: 15,
    title: "Mangabrisa Camping e Redário",
    category: "Camping e Redário",
    images: [
      "/mangabrisa3.jpg",
      "/mangabrisa1.jpeg",
      "/mangabrisa.jpg"
    ],
    showDetails: false,
    details: [
      { label: "Contato", value: "(91) 98557-5169 (Edimar)" },
      { label: "Instagram", value: "@mangabrisa", link: "https://instagram.com/mangabrisa" }
    ]
  },
  {
    id: 16,
    title: "La Luna Fortalezinha",
    category: "Casa de Aluguel",
    images: [
      "/laluna.jpg",
      "/laluna1.jpeg",
      "/laluna2.jpeg",
      "/laluna3.jpg"
    ],
    showDetails: false,
    details: [
      { label: "Contato", value: "+34 678500801 (Renata)" },
      { label: "Instagram", value: "@lalunafortalezinha", link: "https://instagram.com/lalunafortalezinha" }
    ]
  },
{
  id: 17,
  title: "Pousada Tia Marizete",
  category: "Pousada",

  images: [
    process.env.PUBLIC_URL + '/tiamarizete.jpeg'
  ],
  showDetails: false,
  details: [
    { label: "Contato", value: "(91) 99145-1707, (91) 99116-0618" },
    { label: "Facebook", value: "facebook.com/miryan.silva.752", link: "https://facebook.com/miryan.silva.752" }
  ]
}

];

export default lodgings;
