export interface Experience {
  date: string;
  company: string;
  description: string;
  role: string;
  technologies: Technology[];
  images: Image[];
}

interface Technology {
  id: string;
  name: string;
}

interface Image {
  url: string;
  alt: string;
}
