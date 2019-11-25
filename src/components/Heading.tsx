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

const HEADING_STYLE: {
  [key: number]: FlattenSimpleInterpolation;
} = {
  1: css`
    font-size: 3rem;
    line-height: 3.5rem;
  `,
  2: css`
    font-size: 2rem;
    line-height: 2.5rem;
  `,
  3: css`
    font-size: 1.5rem;
    line-height: 2rem;
  `,
  4: css`
    font-size: 1.25rem;
    line-height: 1.75rem;
  `,
  5: css`
    font-size: 1.125rem;
    line-height: 1.5rem;
  `,
};

type Props = TypographyProps & {
  level: number;
};

export const Heading = styled<React.FunctionComponent<Props>>((
  props,
) => React.createElement(`h${props.level}`, removeNonHTMLProps(props)))`
  margin: 0;
  font-weight: bold;
  ${props => HEADING_STYLE[props.level]};
  ${Typography}
`;
