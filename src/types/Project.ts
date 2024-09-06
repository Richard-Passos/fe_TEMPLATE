type Project = {
  slug: string;
  isSelected?: boolean;
  href: string;
  title: string;
  roles: { [key: string]: string };
  year?: number;
  description: string;
  thumbnail: {
    src: string;
    alt: string;
  };
  gif?: {
    src: string;
    alt: string;
  };
  images?: {
    [key: string]: {
      src: string;
      alt: string;
    };
  };
};

export default Project;
