import React from 'react';
import { render } from '@testing-library/react';
import { 
  BasicStrapiJpegImage, 
  BasicStrapiGifImage, 
  BasicStrapiWebpImage,
  BasicStrapiJpegNoPlaceholderImage
} from './image.composition';
import getSrcSets from './react-strapi-img/getSrcSets';
import imageJSON from './test/image.json';
import gifJSON from './test/gif.json';

describe('Srcset formatting', () => {
  it('should generate srcsets for jpeg image', () => {
    const srcSet = getSrcSets(imageJSON.data.attributes.formats,'');
    expect(srcSet.regular).toEqual('https://tco-strapi-images.s3.amazonaws.com/thumbnail_miku_43caf2b601.jpeg 88w, https://tco-strapi-images.s3.amazonaws.com/small_miku_43caf2b601.jpeg 281w, https://tco-strapi-images.s3.amazonaws.com/medium_miku_43caf2b601.jpeg 422w, https://tco-strapi-images.s3.amazonaws.com/large_miku_43caf2b601.jpeg 563w');
  });

  it('should not generate srcsets for gif image', () => {
    const srcSet = getSrcSets(gifJSON.data.attributes.formats,'');
    expect(srcSet.regular).toEqual(null);
  });
});

describe('Alternative text', () => {
  it('should render jpeg with the correct alt text', () => {
    const { getByAltText } = render(<BasicStrapiJpegImage />);
    const rendered = getByAltText('Pastel Hatsune Miku');
    expect(rendered).toBeTruthy();
  });

  it('should render gif with the correct alt text', () => {
    const { getByAltText } = render(<BasicStrapiGifImage />);
    const rendered = getByAltText('Watermelon Miku');
    expect(rendered).toBeTruthy();
  });

  it('should render webp with the correct alt text', () => {
    const { getByAltText } = render(<BasicStrapiWebpImage />);
    const rendered = getByAltText('2020 Hatsune Miku Magical Mirai');
    expect(rendered).toBeTruthy();
  });
});

describe('Placeholder JPEG/WEBP image', () => {
  it('should render jpeg with the correct placeholder src', () => {
    render(<BasicStrapiJpegImage />);
    const displayedImage = document.querySelector("img") as HTMLImageElement;
    expect(displayedImage.src).toContain("https://tco-strapi-images.s3.amazonaws.com/thumbnail_miku_43caf2b601.jpeg");
  });

  it('should render jpeg without placeholder src', () => {
    render(<BasicStrapiJpegNoPlaceholderImage />);
    const displayedImage = document.querySelector("img") as HTMLImageElement;
    expect(displayedImage.src).toContain("data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==");
  });

  it('should render webp with placeholder src', () => {
    render(<BasicStrapiWebpImage />);
    const displayedImage = document.querySelector("img") as HTMLImageElement;
    expect(displayedImage.src).toContain("https://tco-strapi-images.s3.amazonaws.com/thumbnail_Miku_Mirai_9c3a6f634c.webp");
  });
});

describe('GIF', () => {
  it('should render with default src prior to load', () => {
    render(<BasicStrapiGifImage />);
    const displayedImage = document.querySelector("img") as HTMLImageElement;
    expect(displayedImage.src).toContain("data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==");
  });
});
