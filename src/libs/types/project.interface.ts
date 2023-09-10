export interface Project {
  title: string;
  description: string;
  technologies: Technology[];
  images: Image[];
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
