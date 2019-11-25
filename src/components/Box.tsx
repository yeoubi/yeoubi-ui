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
  removeNonHTMLProps,
} from '../internal';

type Props = CommonProps &
  BorderProps &
  BackgroundProps &
  PositionProps & {
    inline?: boolean;
  };

export const Box = styled<React.FunctionComponent<Props>>((
  props
) => React.createElement('div', removeNonHTMLProps(props)))`
  display: ${props => props.inline ? 'inline-' : ''}block;
  ${Common}
  ${Border}
  ${Background}
  ${Position}
`;
