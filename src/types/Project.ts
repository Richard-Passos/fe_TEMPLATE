type Project = {
  slug: string;
  isSelected?: boolean;
  href?: string;
  title: string;
  roles: { [key: string]: string };
  year?: number;
  description: string;
  thumbnail: {
    src: string;
    alt: string;
  };
  gif?: {
    src: '/images/alpaca.webp';
    alt: string;
  };
  images?: {
    [key: string]: {
      src: '/images/project.jpeg';
      alt: string;
    };
  };
};

export default Project;
