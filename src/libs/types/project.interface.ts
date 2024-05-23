export interface Project {
  title: string;
  description: string;
  technologies: Technology[];
  images: Image[];
  orderDifferent: boolean;
  url_github?: string;
  url_website: string;
}

interface Technology {
  id: string;
  name: string;
}

interface Image {
  url: string;
  width: number;
  height: number;
  alt: string;
}
