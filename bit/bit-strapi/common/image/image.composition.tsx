import React from 'react';
import { StrapiImage } from './image';
import imageJSON from './test/image.json';

export const BasicStrapiImage = ({ data = imageJSON.HeroImage.data.attributes }) => (
  <div>
    <StrapiImage attributes={data} />
  </div>
);
