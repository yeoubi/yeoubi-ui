import React from 'react';
import styled, {
  css,
  FlattenSimpleInterpolation,
} from 'styled-components';
import {
  Typography,
  TypographyProps,
  removeNonHTMLProps,
} from '../internal';

export const BODY_STYLE: {
  [key: number]: FlattenSimpleInterpolation;
} = {
  1: css`
    font-size: 1.125rem;
    line-height: 1.5rem;
  `,
  2: css`
    font-size: 1rem;
    line-height: 1.5rem;
  `,
  3: css`
    font-size: 0.875rem;
    line-height: 1.25rem;
  `,
};

interface Props {
  level: number;
}

export const Body = styled<React.FunctionComponent<Props & TypographyProps>>((
  props,
) => React.createElement('div', removeNonHTMLProps(props)))`
  margin: 0;
  ${props => BODY_STYLE[props.level]};
  ${Typography}
`;
