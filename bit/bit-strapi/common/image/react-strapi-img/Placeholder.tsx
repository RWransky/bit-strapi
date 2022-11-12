// adapted from react-strapi-img
import React from "react";
import { ObjectFit } from "@rwransky/bit-strapi.common.types";
import styled from "styled-components";

interface Props {
  src: string;
  url: string;
  objectFit: ObjectFit;
  objectPosition: string;
  stylePlaceholder?: string;
  imageFinished: boolean;
}

interface StyledProps {
  src: string;
  alt: string;
  objectFit: ObjectFit;
  objectPosition: string;
  stylePlaceholder?: string;
}

const StyledPlaceholder = styled.img<StyledProps>`
  object-fit: ${(props) => props.objectFit};
  object-position: ${(props) => props.objectPosition};
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  filter: blur(10px);
  transform: scale(1.1);
  transform-origin: center;
  z-index: 0;
  pointer-events: none;
  ${(props) => (props.imageFinished ? 0 : 1)};
  ${(props) => props.stylePlaceholder}
`;

const Placeholder: React.FC<Props> = ({
  src,
  url,
  objectFit,
  objectPosition,
  stylePlaceholder,
  imageFinished,
}) => {
  return (
    !imageFinished && (
      <StyledPlaceholder
        src={src}
        alt={`Placeholder for the image "${url}".`}
        objectFit={objectFit}
        objectPosition={objectPosition}
        stylePlaceholder={stylePlaceholder}
      />
    )
  );
};

export default React.memo(Placeholder);
