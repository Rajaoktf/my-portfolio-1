import type { Project, Skill, NavItem } from "../types";

export const navItems: NavItem[] = [
  { label: "about", href: "#about" },
  { label: "skills", href: "#skills" },
  { label: "projects", href: "#projects" },
  { label: "contact", href: "#contact" },
];

export const skills: Skill[] = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "HTML5", "CSS3"],
  },
  {
    category: "Frameworks",
    items: ["React", "Next.js", "Vue.js", "Remix"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "CSS Modules", "Framer Motion", "shadcn/ui"],
  },
  {
    category: "Tooling",
    items: ["Vite", "Webpack", "Turborepo", "Storybook"],
  },
  {
    category: "Testing",
    items: ["Vitest", "Playwright", "React Testing Library"],
  },
  {
    category: "Others",
    items: ["Git", "Figma", "REST API", "GraphQL"],
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Tpay Wallet",
    description: "Tpay Wallet adalah aplikasi manajemen keuangan digital yang memungkinkan pengguna untuk memantau saldo, melihat riwayat transaksi, melakukan transfer dana, serta menganalisis pemasukan dan pengeluaran melalui visualisasi data yang interaktif. Aplikasi ini dirancang dengan antarmuka modern dan responsif untuk memberikan pengalaman pengguna yang mudah dan efisien dalam mengelola keuangan sehari-hari.",
    tags: ["React", "TypeScript", "Tailwind"],
    year: "2025",
    // repo: 'https://github.com',
    link: "https://tpay.shiblysolution.id/dashboard",
  },
  {
    id: 2,
    title: "SBC Voice Monitoring Dashboard",
    description: "SBC Voice Monitoring Dashboard merupakan dashboard monitoring berbasis web yang dikembangkan untuk menampilkan data operasional layanan komunikasi VoIP. Aplikasi ini menyediakan visualisasi data, ringkasan statistik, dan pemantauan aktivitas sistem dalam satu antarmuka yang modern dan responsif, sehingga memudahkan pengguna dalam melakukan monitoring dan analisis data secara real-time.",
    tags: ["React", "TypeScript", "Tailwind"],
    year: "2025",
    // repo: 'https://github.com',
    link: "http://5.181.178.78:5173/",
  },
  {
    id: 3,
    title: "Online Charging Sistem (OCS)",
    description: "OCS Monitoring Dashboard adalah aplikasi dashboard yang digunakan untuk memantau performa dan operasional sistem Online Charging System (OCS). Dashboard ini menyajikan berbagai metrik penting, status layanan, aktivitas transaksi, serta informasi monitoring secara real-time dalam tampilan yang terstruktur dan mudah dipahami. Tujuannya adalah membantu tim operasional dalam melakukan pengawasan, analisis, dan pengambilan keputusan dengan lebih cepat dan efisien.",
    tags: ["React", "TypeScript", "Tailwind"],
    year: "2025",
    // repo: "https://github.com",
    link: "http://147.139.247.189:5173",
  },
  {
    id: 4,
    title: "Mediation Monitoring Dashboard",
    description: "Mediation Monitoring Dashboard merupakan aplikasi monitoring berbasis web yang dirancang untuk memberikan visibilitas terhadap proses mediasi data antar sistem. Dashboard menyediakan informasi mengenai status proses, volume data, performa layanan, serta notifikasi terkait kendala operasional, sehingga memudahkan proses pemantauan dan troubleshooting.",
    tags: ["React", "TypeScript", "Tailwind"],
    year: "2026",
    // repo: "https://github.com",
    link: "https://4xs7b48c-5173.asse.devtunnels.ms/",
  },
  //  {
  //   id: 5,
  //   title: "Tetum",
  //   description: "Mediation Monitoring Dashboard merupakan aplikasi monitoring berbasis web yang dirancang untuk memberikan visibilitas terhadap proses mediasi data antar sistem. Dashboard menyediakan informasi mengenai status proses, volume data, performa layanan, serta notifikasi terkait kendala operasional, sehingga memudahkan proses pemantauan dan troubleshooting.",
  //   tags: ["React", "TypeScript", "Tailwind"],
  //   year: "2026",
  //   // repo: "https://github.com",
  //   link: "https://4xs7b48c-5173.asse.devtunnels.ms/",
  // },
];
