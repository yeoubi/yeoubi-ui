import React from 'react';
import styled from 'styled-components';
import {
  media,
  removeNonHTMLProps,
  toRem,
  unwrap,
  StyleValue,
  ResponsiveValue,
} from '../internal';

export interface SizeProps {
  width?: ResponsiveValue<StyleValue>;
  minWidth?: ResponsiveValue<StyleValue>;
  maxWidth?: ResponsiveValue<StyleValue>;
  height?: ResponsiveValue<StyleValue>;
  minHeight?: ResponsiveValue<StyleValue>;
  maxHeight?: ResponsiveValue<StyleValue>;
  children: React.ReactElement;
}

export const Size = styled<React.FunctionComponent<SizeProps>>(({
  children,
  ...props
}) => React.cloneElement(children as any, removeNonHTMLProps(props)))`
  ${media.sm`
    width: ${props => props.width && toRem(unwrap(props.width, 0))};
    min-width: ${props => props.minWidth && toRem(unwrap(props.minWidth, 0))};
    max-width: ${props => props.maxWidth && toRem(unwrap(props.maxWidth, 0))};
    height: ${props => props.height && toRem(unwrap(props.height, 0))};
    min-height: ${props => props.minHeight && toRem(unwrap(props.minHeight, 0))};
    max-height: ${props => props.maxHeight && toRem(unwrap(props.maxHeight, 0))};
  `}
  ${media.md`
    width: ${props => props.width && toRem(unwrap(props.width, 1))};
    min-width: ${props => props.minWidth && toRem(unwrap(props.minWidth, 1))};
    max-width: ${props => props.maxWidth && toRem(unwrap(props.maxWidth, 1))};
    height: ${props => props.height && toRem(unwrap(props.height, 1))};
    min-height: ${props => props.minHeight && toRem(unwrap(props.minHeight, 1))};
    max-height: ${props => props.maxHeight && toRem(unwrap(props.maxHeight, 1))};
  `}
  ${media.lg`
    width: ${props => props.width && toRem(unwrap(props.width, 2))};
    min-width: ${props => props.minWidth && toRem(unwrap(props.minWidth, 2))};
    max-width: ${props => props.maxWidth && toRem(unwrap(props.maxWidth, 2))};
    height: ${props => props.height && toRem(unwrap(props.height, 2))};
    min-height: ${props => props.minHeight && toRem(unwrap(props.minHeight, 2))};
    max-height: ${props => props.maxHeight && toRem(unwrap(props.maxHeight, 2))};
  `}
`;
