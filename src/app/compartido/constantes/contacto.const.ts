export interface ContactoConfig {
  email: string;
  telefono: {
    mostrar: string;
    link: string;
    whatsapp: string;
    whatsappMostrar: string;
  };
  direccion: {
    mostrar: string;
    link: string;
  };
  redes: {
    facebook: string;
    instagram: string;
    linkedin: string;
  };
}

export const CONTACTO_CONFIG: ContactoConfig = {
  email: 'aucon@aucon.com.ar',
  telefono: {
    mostrar: '+54 9 351 594-2257',
    link: 'tel:+5493515942257',
    whatsapp: 'https://wa.me/5493515942257',
    whatsappMostrar: '351 594-2257',
  },
  direccion: {
    mostrar: 'Vigo 2176, Córdoba, Argentina',
    link: 'https://www.google.com/maps/search/?api=1&query=vigo%202176,cordoba,%20argentina',
  },
  redes: {
    facebook: 'https://www.facebook.com/auconingenieria',
    instagram: 'https://www.instagram.com/auconingenieria',
    linkedin: 'https://www.linkedin.com/company/aucon-ingenieria-srl/about',
  },
};
