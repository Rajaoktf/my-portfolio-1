export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  year: string;
  link?: string;
  repo?: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface NavItem {
  label: string;
  href: string;
}
