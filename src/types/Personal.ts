type Personal = {
  name: {
    first: string;
    last: string;
  };
  email: string;
  title: string;
  description: string;
  keywords: string;
  authors: { name: string; url: string }[];
  location: {
    country: string;
    state: string;
    gmt: string;
  };
  socials: { id: string; href: string; icon: string; label: string }[];
};

export default Personal;
