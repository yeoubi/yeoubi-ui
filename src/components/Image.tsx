import React from 'react';
import styled from 'styled-components';
import {
  img,
  ImgProps,
  Box,
  BoxProps,
} from '../internal';

export type ImageProps = BoxProps & ImgProps;

const ImageElement = styled(Box)`
  ${img}
`;

export const Image: React.FunctionComponent<ImageProps> = (props) => (
  <ImageElement as="img" {...props} />
);
