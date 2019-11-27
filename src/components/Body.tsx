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

export const BODY_STYLE: {
  [key: number]: FlattenInterpolation<any>;
} = {
  1: css`
    font-size: 1.125rem;
    line-height: 1.5rem;

    ${media.mobile`
        font-size: 1rem;
        line-height: 1.5rem;
    `}
  `,
  2: css`
    font-size: 1rem;
    line-height: 1.5rem;

    ${media.mobile`
      font-size: 0.875rem;
      line-height: 1.25rem;
    `}
  `,
  3: css`
    font-size: 0.875rem;
    line-height: 1.25rem;

    ${media.mobile`
      font-size: 0.75rem;
      line-height: 1rem;
    `}
  `,
  4: css`
    font-size: 0.75rem;
    line-height: 1rem;

    ${media.mobile`
      font-size: 0.625rem;
      line-height: 0.1rem;
    `}
  `,
};

export type BodyProps = TypographyProps & {
  level: number;
};

export const Body = styled<React.FunctionComponent<BodyProps>>((
  props,
) => React.createElement('div', removeNonHTMLProps(props)))`
  margin: 0;
  ${props => BODY_STYLE[props.level]};
  ${Typography}
`;
