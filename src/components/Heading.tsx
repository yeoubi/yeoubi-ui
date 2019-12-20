import React from 'react';
import { withTheme } from 'styled-components';
import {
  Box,
  BoxProps,
  ThemeProps,
  DEFAULT_FONT_SIZES,
  DEFAULT_LINE_HEIGHTS,
} from '../internal';

export type HeadingProps = BoxProps & {
  level: number;
};

const HeadingComponent: React.FunctionComponent<HeadingProps & ThemeProps> = (props) => {
  const {
    theme: {
      fontSizes = DEFAULT_FONT_SIZES,
      lineHeights = DEFAULT_LINE_HEIGHTS,
      fonts: {
        heading = undefined,
      } = {},
    } = {},
  } = props;

  return (
    <Box
      as={`h${props.level}`}
      fontFamily={heading}
      fontSize={fontSizes[props.level - 1]}
      lineHeight={lineHeights[props.level - 1]}
      m={0}
      {...props}
    />
  );
};

export const Heading = withTheme(HeadingComponent);
