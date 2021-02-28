import { getStrapiMedia } from "../lib/media";
import NextImage from 'next/image';

const Image = ({ image, style, width, height }) => {
  const imageUrl = getStrapiMedia(image);

  return (
    <NextImage
      src={imageUrl}
      alt={image.alternativeText || image.name}
      style={style}
      width={width ?? 500}
      height={height ?? 500}
    />
  );
};

export default Image;