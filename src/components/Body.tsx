import React from 'react';
import { withTheme } from 'styled-components';
import {
  Box,
  BoxProps,
  ThemeProps,
  DEFAULT_FONT_SIZES,
  DEFAULT_LINE_HEIGHTS,
} from '../internal';

export type BodyProps = BoxProps & {
  level: number;
};

const BodyComponent: React.FunctionComponent<BodyProps & ThemeProps> = (props) => {
  const {
    theme: {
      fontSizes = DEFAULT_FONT_SIZES,
      lineHeights = DEFAULT_LINE_HEIGHTS,
      fonts: {
        body = undefined,
      } = {},
    } = {},
  } = props;

  return (
    <Box
      fontFamily={body}
      fontSize={fontSizes[props.level + 3]}
      lineHeight={lineHeights[props.level + 3]}
      {...props}
    />
  );
};

export const Body = withTheme(BodyComponent);
