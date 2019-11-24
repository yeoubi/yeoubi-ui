import React from 'react';
import styled from 'styled-components';
import {
  Common,
  CommonProps,
  Border,
  BorderProps,
  Background,
  BackgroundProps,
  Position,
  PositionProps,
  HTMLImageProps,
  removeNonHTMLProps,
} from '../internal';

type Props = CommonProps & BorderProps & BackgroundProps & PositionProps & HTMLImageProps & {
  src: string;
  fit?: 'cover' | 'contain' | 'fill';
}

export const Image = styled<React.FunctionComponent<Props>>((
  props,
) => React.createElement('img', removeNonHTMLProps(props)))`
  object-fit: ${props => props.fit || 'none'};
  ${Common}
  ${Border}
  ${Background}
  ${Position}
`;

export default Image;
