declare const process: {
  env?: Record<string, string | undefined>;
};

interface Photo {
  id: number;
  url: string;
  bgPos: string;
  position: string;
  title: string;
  title2: string;
  latlng: string;
  description: string;
  tip: string;
}
