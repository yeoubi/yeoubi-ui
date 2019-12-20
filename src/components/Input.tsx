import React, { forwardRef } from 'react';
import styled from 'styled-components';
import {
  Box,
  BoxProps,
  DEFAULT_FONT_SIZES,
  DEFAULT_LINE_HEIGHTS,
} from '../internal';

export type InputProps = BoxProps & {
  level: number;
  type?: string;
  name?: string;
  value?: string;
  full?: boolean;
  ref?: any;
};

const InputElement = styled(Box)<InputProps>`
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #d2d2d2;
  }
  :-ms-input-placeholder {
    color: #d2d2d2;
  }
  -moz-appearance:textfield;
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  outline: none;
`;

export const Input: React.FunctionComponent<InputProps> = forwardRef((props, ref) => {
  const {
    level,
    full,
    type,
    theme: {
      fontSizes = DEFAULT_FONT_SIZES,
      lineHeights = DEFAULT_LINE_HEIGHTS,
      fonts: {
        body = undefined,
      } = {},
    } = {},
  } = props;

  return (
    <InputElement
      as={type === 'textarea' ? 'textarea' : 'input'}
      ref={ref}
      fontFamily={body}
      fontSize={fontSizes[level + 3]}
      lineHeight={lineHeights[level + 3]}
      width={full ? '100%' : undefined}
      autoCorrect="off"
      autoComplete="off"
      autoCapitalize="none"
      {...props}
    />
  );
});
