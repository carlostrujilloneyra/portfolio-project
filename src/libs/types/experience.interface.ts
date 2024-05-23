export interface Experience {
  date: string;
  company: string;
  description: string;
  role: string;
  technologies: Technology[];
  images: Image[];
  hasSite?: boolean;
}

interface Technology {
  id: string;
  name: string;
}

export interface Image {
  url: string;
  width: number;
  height: number;
  alt: string;
}
