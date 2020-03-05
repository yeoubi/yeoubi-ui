import React from 'react';
import styled, { withTheme } from 'styled-components';
import {
  Box,
  BoxProps,
  ThemeProps,
  HTMLButtonProps,
  DEFAULT_FONT_SIZES,
  DEFAULT_LINE_HEIGHTS,
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
      fontSize={fontSizes.slice(props.level + 3)}
      lineHeight={lineHeights.slice(props.level + 3)}
      display={props.full ? 'block' : undefined}
      width={props.full ? '100%' : undefined}
      {...props}
    />
  );
};

export const Button = withTheme(ButtonComponent);
