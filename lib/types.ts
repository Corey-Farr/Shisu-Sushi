export type SpecialTag = "chef_special" | "premium" | "vegetarian" | "spicy";

export type MenuItem = {
  id: string;
  name: string;
  description?: string;
  price?: string;
  isSignature?: boolean;
  tags?: SpecialTag[];
};

export type MenuCategory = {
  id: string;
  name: string;
  description?: string;
  items: MenuItem[];
};

export type OpeningHour = {
  day: string;
  open: string | null;
  close: string | null;
};

export type SocialLink = {
  platform: "instagram" | "facebook" | "tiktok" | "x";
  url: string;
};

export type SeoConfig = {
  title: string;
  description: string;
};

export type SiteContent = {
  heroHeadline: string;
  heroSubcopy: string;
  highlights: { title: string; body: string }[];
  addressLines: string[];
  cityLine: string;
  phone: string;
  email: string;
  reservationsEmail: string;
  mapUrl: string;
  hoursSummary: string;
  seatingsSummary: string;
  social: SocialLink[];
  seo: {
    home: SeoConfig;
    menu: SeoConfig;
    reservations: SeoConfig;
    about: SeoConfig;
    contact: SeoConfig;
  };
};


