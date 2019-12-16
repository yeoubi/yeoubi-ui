import React from 'react';
import styled, {
  css,
  FlattenInterpolation,
} from 'styled-components';
import {
  media,
  Typography,
  TypographyProps,
  removeNonHTMLProps,
} from '../internal';

const HEADING_STYLE: {
  [key: number]: FlattenInterpolation<any>;
} = {
  1: css`
    font-size: 3rem;
    line-height: 3.5rem;

    ${media.sm`
      font-size: 2rem;
      line-height: 2.5rem;
    `}
  `,
  2: css`
    font-size: 2rem;
    line-height: 2.5rem;

    ${media.sm`
      font-size: 1.5rem;
      line-height: 2rem;
    `}
  `,
  3: css`
    font-size: 1.5rem;
    line-height: 2rem;

    ${media.sm`
      font-size: 1.25rem;
      line-height: 1.75rem;
    `}
  `,
  4: css`
    font-size: 1.25rem;
    line-height: 1.75rem;

    ${media.sm`
      font-size: 1.125rem;
      line-height: 1.5rem;
    `}
  `,
  5: css`
    font-size: 1.125rem;
    line-height: 1.5rem;

    ${media.sm`
      font-size: 1rem;
      line-height: 1.5rem;
    `}
  `,
  6: css`
    font-size: 1rem;
    line-height: 1.5rem;

    ${media.sm`
      font-size: 0.875rem;
      line-height: 1.25rem;
    `}
  `,
};

export type HeadingProps = TypographyProps & {
  level: number;
};

export const Heading = styled<React.FunctionComponent<HeadingProps>>((
  props,
) => React.createElement(`h${props.level}`, removeNonHTMLProps(props)))`
  margin: 0;
  font-weight: bold;
  font-family: 'Noto Sans KR', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  ${props => HEADING_STYLE[props.level]};
  ${Typography}
`;
