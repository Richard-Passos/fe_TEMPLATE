type Project = {
  slug: string;
  isSelected?: boolean;
  href: string;
  title: string;
  roles: string[];
  year?: number | string;
  description: string;
  thumbnail: {
    src: string;
    alt: string;
  };
  banner: {
    src: string;
    alt: string;
  };
  images?: {
    id: string;
    src: string;
    alt: string;
  }[];
};

export default Project;
