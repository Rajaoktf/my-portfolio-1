export const translations = {
  id: {
    nav: {
      about: 'tentang',
      skills: 'skill',
      projects: 'projek',
      contact: 'kontak',
    },
    hero: {
      greeting: 'Halo.',
      title: "Gua Raja",
      description:
        'Gua bikin web yang cepat, aksesibel, dan enak dipake. Fokus di React ecosystem.',
      primaryCta: 'Lihat Projek',
      secondaryCta: 'Hubungi Gua',
      status: 'Tersedia untuk freelance & full-time',
    },
  },
  en: {
    nav: {
      about: 'about',
      skills: 'skills',
      projects: 'projects',
      contact: 'contact',
    },
    hero: {
      greeting: 'Hello.',
      title: "I'm Raja",
      description:
        'I build fast, accessible, and enjoyable websites. Focused on the React ecosystem.',
      primaryCta: 'View Projects',
      secondaryCta: 'Contact Me',
      status: 'Available for freelance & full-time',
    },
  },
};

export type Language = keyof typeof translations;