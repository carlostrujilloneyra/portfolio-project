export interface Project {
  title: string;
  description: string;
  technologies: Technology[];
  images: Image[];
  orderDifferent: boolean;
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
