export interface Country {
  currency: string;
  language: string;
  capitol: string;
  name: {
    common: string;
    official: string;
  };
  population: number;
  flags: {
    png: string;
    svg: string;
  };
}
