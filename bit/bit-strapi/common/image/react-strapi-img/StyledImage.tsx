// Adapted from react-strapi-img
import { SyntheticEvent } from "react";
import { ObjectFit } from "./types";
import styled from "styled-components";

interface Props {
  src: string;
  alt: string;
  loaded: boolean;
  imageFinished: boolean;
  usePlaceholder: boolean;
  className?: string;
  sizes?: string;
  objectFit?: ObjectFit;
  objectPosition?: string;
  styleImg?: string;
  onLoad?: (event: SyntheticEvent<HTMLImageElement, Event>) => void;
  onError?: (event: SyntheticEvent<HTMLImageElement, Event>) => void;
}

const StyledImage = styled.img<Props>`
  object-fit: ${(props) => props.objectFit};
  object-position: ${(props) => props.objectPosition};
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: ${(props) => (props.usePlaceholder ? (props.imageFinished ? '100%' : 0) : '100%')};
  height: ${(props) => (props.usePlaceholder ? (props.imageFinished ? '100%' : 0) : '100%')};
  transition: opacity 0.5s ease-in-out;
  opacity: ${(props) => (props.loaded ? 1 : 0)};
  ${(props) => props.styleImg};
`;

export default StyledImage;
