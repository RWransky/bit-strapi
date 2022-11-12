import React from 'react';
import { StrapiImage } from './image';
import { ImageProps } from '@rwransky/bit-strapi.common.types';
import imageJSON from './test/image.json';
import gifJSON from './test/gif.json';
import webpJSON from './test/webp.json';
import highResJSON from './test/highres.json';

const imgData = imageJSON.data.attributes as ImageProps;
const gifData = gifJSON.data.attributes as ImageProps;
const webpData = webpJSON.data.attributes as ImageProps;
const highResData = highResJSON.data.attributes as ImageProps;
const highResDataWithoutPlaceholder = {
  ...highResJSON.data.attributes,
  'placeholder': false
} as ImageProps;
const imgDataWithoutPlaceholder = {
  ...imageJSON.data.attributes,
  'placeholder': false
} as ImageProps;


export const BasicStrapiImage = (props) => (
  <div>
    <StrapiImage attributes={highResData} />
    <StrapiImage attributes={highResDataWithoutPlaceholder}/>
    <StrapiImage attributes={imgData} />
    <StrapiImage attributes={gifData} />
    <StrapiImage attributes={webpData} />
  </div>
);

export const BasicStrapiJpegImage = (props) => (
  <StrapiImage attributes={imgData} />
);

export const BasicStrapiJpegNoPlaceholderImage = (props) => (
  <StrapiImage attributes={imgDataWithoutPlaceholder} />
);

export const BasicStrapiWebpImage = (props) => (
  <StrapiImage attributes={webpData} />
);

export const BasicStrapiGifImage = (props) => (
  <StrapiImage attributes={gifData} />
);