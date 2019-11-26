export interface Slide {
  date: string;
  event: {
    name: string;
    url: string;
  };
  slide: {
    name: string;
    url: string;
  };
}

export interface Sns {
  serviceName: string;
  url: string;
}
