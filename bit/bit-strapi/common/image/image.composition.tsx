import React from 'react';
import { StrapiImage } from './image';
import * as Types from './react-strapi-img/types';
import imageJSON from './test/image.json';
import gifJSON from './test/gif.json';
import webpJSON from './test/webp.json';
import highResJSON from './test/highres.json';

const imgData = imageJSON.data.attributes as Types.ImageProps;
const gifData = gifJSON.data.attributes as Types.ImageProps;
const webpData = webpJSON.data.attributes as Types.ImageProps;
const highResData = highResJSON.data.attributes as Types.ImageProps;
const highResDataWithoutPlaceholder = {
  ...highResJSON.data.attributes,
  'placeholder': false
} as Types.ImageProps;
const imgDataWithoutPlaceholder = {
  ...imageJSON.data.attributes,
  'placeholder': false
} as Types.ImageProps;


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