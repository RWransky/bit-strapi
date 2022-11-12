import { ImageProps } from "./react-strapi-img/types";

export interface StrapiImageProps {
  attributes: Types.ImageProps;
  preserveAspectRatio?: boolean;
  style?: string;
}