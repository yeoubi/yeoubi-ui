import React, {
  forwardRef,
  useCallback,
} from 'react';
import styled, { withTheme } from 'styled-components';
import {
  Box,
  BoxProps,
  ThemeProps,
  HTMLInputProps,
  DEFAULT_FONT_SIZES,
  DEFAULT_LINE_HEIGHTS,
  DEFAULT_BREAKPOINTS,
} from '../internal';

export type InputProps = BoxProps &
  HTMLInputProps & {
    level: number;
    type?: string;
    name?: string;
    value?: string;
    full?: boolean;
    ref?: any;
    onChangeValue?: (value: string) => void;
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

const InputComponent: React.FunctionComponent<InputProps & ThemeProps> = forwardRef(({
  onChangeValue,
  ...props
}, ref) => {
  const {
    type,
    full,
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

  const onChange = useCallback(({ target }: React.ChangeEvent<any>) => {
    onChangeValue && onChangeValue(target.value)
  }, [onChangeValue]);

  return (
    <InputElement
      as={type === 'textarea' ? 'textarea' : 'input'}
      ref={ref}
      fontFamily={body}
      fontSize={fontSizes.slice(level, level + breakpoints.length).reverse()}
      lineHeight={lineHeights.slice(level, level + breakpoints.length).reverse()}
      width={full ? '100%' : undefined}
      autoCorrect="off"
      autoComplete="off"
      autoCapitalize="none"
      onChange={onChange}
      {...props}
    />
  );
});

export const Input = withTheme(InputComponent);
