import React from 'react';
import { withTheme } from 'styled-components';
import {
  Box,
  BoxProps,
  ThemeProps,
  DEFAULT_FONT_SIZES,
  DEFAULT_LINE_HEIGHTS,
  DEFAULT_BREAKPOINTS,
} from '../internal';

export type BodyProps = BoxProps & {
  level: number;
};

const BodyComponent: React.FunctionComponent<BodyProps & ThemeProps> = (props) => {
  const {
    theme: {
      fontSizes = DEFAULT_FONT_SIZES,
      lineHeights = DEFAULT_LINE_HEIGHTS,
      breakpoints = DEFAULT_BREAKPOINTS,
      fonts: {
        body = undefined,
      } = {},
    } = {},
  } = props;

  const level = props.level + 3;

  return (
    <Box
      fontFamily={body}
      fontSize={fontSizes.slice(level, level + breakpoints.length).reverse()}
      lineHeight={lineHeights.slice(level, level + breakpoints.length).reverse()}
      {...props}
    />
  );
};

export const Body = withTheme(BodyComponent);
