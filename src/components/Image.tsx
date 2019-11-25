import React from 'react';
import styled from 'styled-components';
import {
  Common,
  CommonProps,
  Border,
  BorderProps,
  Position,
  PositionProps,
  HTMLImageProps,
  removeNonHTMLProps,
} from '../internal';

export type ImageProps = CommonProps &
  BorderProps &
  PositionProps &
  HTMLImageProps & {
    src: string;
    fit?: 'cover' | 'contain' | 'fill';
  };

export const Image = styled<React.FunctionComponent<ImageProps>>((
  props,
) => React.createElement('img', removeNonHTMLProps(props)))`
  object-fit: ${props => props.fit || 'none'};
  ${Common}
  ${Border}
  ${Position}
`;

export default Image;
