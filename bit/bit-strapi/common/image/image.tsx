import React from 'react';
import Image from './react-strapi-img/ReactStrapiImg';
import {StrapiImageProps} from "@rwransky/bit-strapi.common.types";

export function StrapiImage({
  attributes,
  preserveAspectRatio = false,
  style: styleOverride,
  ...props
}: StrapiImageProps) {


  let style = styleOverride;
  if (!preserveAspectRatio) {
    style = `
      z-index: unset;

      &&::after {
        display: none;
      }

      img {
        position: relative;
        height: auto;
      }

      ${styleOverride}
    `;
  }

  return (
    <Image {...attributes} style={style} {...props} />
  );
}
