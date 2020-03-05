import React from 'react';
import styled, { withTheme } from 'styled-components';
import {
  Box,
  BoxProps,
  ThemeProps,
  HTMLButtonProps,
  DEFAULT_FONT_SIZES,
  DEFAULT_LINE_HEIGHTS,
  DEFAULT_BREAKPOINTS,
} from '../internal';

export type ButtonProps = BoxProps &
  HTMLButtonProps & {
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

const ButtonComponent: React.FunctionComponent<ButtonProps & ThemeProps> = (props) => {
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
    <ButtonElement
      as="button"
      border="none"
      fontFamily={body}
      fontSize={fontSizes.slice(level, level + breakpoints.length).reverse()}
      lineHeight={lineHeights.slice(level, level + breakpoints.length).reverse()}
      display={props.full ? 'block' : undefined}
      width={props.full ? '100%' : undefined}
      {...props}
    />
  );
};

export const Button = withTheme(ButtonComponent);
