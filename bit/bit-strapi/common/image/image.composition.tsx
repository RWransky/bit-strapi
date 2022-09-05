import React from 'react';
import { StrapiImage } from './image';
import imageJSON from './test/image.json';
import gifJSON from './test/gif.json';
import webpJSON from './test/webp.json';

const imgData = imageJSON.data.attributes;
const gifData = gifJSON.data.attributes;
const webpData = webpJSON.data.attributes;

export const BasicStrapiImage = (props) => (
  <div>
    <StrapiImage attributes={imgData} />
    <StrapiImage attributes={gifData} />
    <StrapiImage attributes={webpData} />
  </div>
);

export const BasicStrapiGifImage = (props) => (
  <StrapiImage attributes={gifData} />
);