import type { StaticImageData } from "next/image";

export type Slide = {
  img: StaticImageData;
  header: string;
  description: string;
};
