import React from 'react';
import styled from 'styled-components';
import {
  Box,
  BoxProps,
  DEFAULT_FONT_SIZES,
  DEFAULT_LINE_HEIGHTS,
} from '../internal';

export type ButtonProps = BoxProps & {
  level: number;
  full?: boolean;
  disabled?: boolean;
};

const ButtonElement = styled(Box)<ButtonProps>`
  outline: none;
  cursor: pointer;

  &:active,
  &:foucs {
    outline: none;
  }

  ${props => props.disabled && {
    cursor: 'not-allowed',
  }}
`;

export const Button: React.FunctionComponent<ButtonProps> = (props) => {
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
    <ButtonElement
      as="button"
      border="none"
      fontFamily={body}
      fontSize={fontSizes[props.level + 3]}
      lineHeight={lineHeights[props.level + 3]}
      display={props.full ? 'block' : undefined}
      width={props.full ? '100%' : undefined}
      {...props}
    />
  );
};
