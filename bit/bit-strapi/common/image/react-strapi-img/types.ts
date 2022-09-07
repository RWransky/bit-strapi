// adapted from react-strapi-img
import { SyntheticEvent, ReactNode } from "react";

export type ObjectFit =
  | "fill"
  | "cover"
  | "inherit"
  | "none"
  | "-moz-initial"
  | "initial"
  | "revert"
  | "unset"
  | "contain"
  | "scale-down"
  | undefined;

type Ext = 
  ".jpg"
  | ".png"
  | ".tiff"
  | ".webp"
  | ".gif"
  | ".ico"
  | ".svg";

type Mime = 
  "image/jpg" 
  | "image/png" 
  | "image/tiff" 
  | "image/webp"
  | "image/gif" 
  | "image/ico" 
  | "image/svg";

export interface Format {
  ext?: Ext;
  url: string;
  hash?: string;
  mime?: Mime;
  name?: string;
  path?: null;
  size?: number;
  width?: number;
  height?: number;
}

export const validFormats = [
  "large","small","medium","thumbnail"
];

export type Formats = {
  large?: Format;
  small?: Format;
  medium?: Format;
  thumbnail?: Format;
};

export interface ContextProps {
  name?: string;
  alternativeText?: string;
  caption?: string;
  width?: number;
  height?: number;
  hash?: string;
  ext?: Ext;
  mime?: Mime;
  size?: number;
  previewUrl?: string;
  provider?: string;
  provider_metadata?: Object;
  createdAt?: string;
  updatedAt?: string;
  related?: Object;
  objectFit?: ObjectFit;
  objectPosition?: string;
  proportionalHeight?: number;
  placeholder?: boolean;
  className?: string;
  style?: string;
  stylePlaceholder?: string;
  styleImg?: string;
  prefix?: string;
  rootMargin?: string;
  threshold?: number;
  sizes?: string;
  onLoad?: (event: SyntheticEvent<HTMLImageElement, Event>) => void;
  onError?: (event: SyntheticEvent<HTMLImageElement, Event>) => void;
  webp?: boolean;
}

export interface ImageProps extends ContextProps {
  url: string;
  formats?: Formats;
}

export interface ProviderProps extends ContextProps {
  children?: ReactNode;
}
