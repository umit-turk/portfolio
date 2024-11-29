export interface Experience {
    company: string;
    position: string;
    period: {
      tr: string;
      en: string;
    } | string;
    location: string;
    description: {
      tr: string;
      en: string;
    };
    responsibilities: {
      tr: string[];
      en: string[];
    };
  }