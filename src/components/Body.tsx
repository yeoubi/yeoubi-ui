import React from 'react';
import {
  Box,
  BoxProps,
  DEFAULT_FONT_SIZES,
  DEFAULT_LINE_HEIGHTS,
} from '../internal';

export type BodyProps = BoxProps & {
  level: number;
};

export const Body: React.FunctionComponent<BodyProps> = (props) => {
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
