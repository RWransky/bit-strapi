import React from 'react';
import { StrapiImage } from './image';
import imageJSON from './test/image.json';
import gifJSON from './test/gif.json';
import webpJSON from './test/webp.json';
import highResJSON from './test/highres.json';

const imgData = imageJSON.data.attributes;
const gifData = gifJSON.data.attributes;
const webpData = webpJSON.data.attributes;
const highResData = highResJSON.data.attributes;


export const BasicStrapiImage = (props) => (
  <div>
    <StrapiImage attributes={highResData} />
    <StrapiImage attributes={highResData} placeholder={false}/>
    <StrapiImage attributes={imgData} />
    <StrapiImage attributes={gifData} />
    <StrapiImage attributes={webpData} />
  </div>
);

export const BasicStrapiJpegImage = (props) => (
  <StrapiImage attributes={imgData} />
);

export const BasicStrapiJpegNoPlaceholderImage = (props) => (
  <StrapiImage attributes={imgData} placeholder={false} />
);

export const BasicStrapiWebpImage = (props) => (
  <StrapiImage attributes={webpData} />
);

export const BasicStrapiGifImage = (props) => (
  <StrapiImage attributes={gifData} />
);