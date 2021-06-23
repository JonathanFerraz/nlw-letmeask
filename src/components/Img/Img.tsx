import React from 'react';

import { Image } from './styles';

export default function Img(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  const { draggable = 'false', alt = '', ...rest } = props;

  return <Image {...rest} alt={alt} draggable={draggable} />;
}
