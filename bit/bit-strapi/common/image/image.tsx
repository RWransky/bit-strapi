import React from 'react';
import Image from './react-strapi-img/ReactStrapiImg';
import * as Types from "./types";

export function StrapiImage({
  attributes,
  preserveAspectRatio = false,
  style: styleOverride,
  ...props,
}: Types.ImageProps) {


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
