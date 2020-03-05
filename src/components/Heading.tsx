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

export type HeadingProps = BoxProps & {
  level: number;
};

const HeadingComponent: React.FunctionComponent<HeadingProps & ThemeProps> = (props) => {
  const {
    theme: {
      fontSizes = DEFAULT_FONT_SIZES,
      lineHeights = DEFAULT_LINE_HEIGHTS,
      breakpoints = DEFAULT_BREAKPOINTS,
      fonts: {
        heading = undefined,
      } = {},
    } = {},
  } = props;

  return (
    <Box
      as={`h${props.level}`}
      fontFamily={heading}
      fontSize={fontSizes.slice(props.level - 1, props.level - 1 + breakpoints.length).reverse()}
      lineHeight={lineHeights.slice(props.level - 1, props.level - 1 + breakpoints.length).reverse()}
      m={0}
      {...props}
    />
  );
};

export const Heading = withTheme(HeadingComponent);
