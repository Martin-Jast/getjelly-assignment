export type Thumbnail = {
  path: string;
  extension: string;
};

export type Hero = {
  id: number;
  name: string;
  description: string;
  modified: Date;
  thumbnail: Thumbnail;
  resourceURI: string;
};
