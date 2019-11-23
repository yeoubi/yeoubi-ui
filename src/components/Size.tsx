import React from 'react';
import styled from 'styled-components';
import {
  removeNonHTMLProps,
  toRem,
  StyleValue,
} from '../internal';

export interface SizeProps {
  width?: StyleValue;
  minWidth?: StyleValue;
  maxWidth?: StyleValue;
  height?: StyleValue;
  minHeight?: StyleValue;
  maxHeight?: StyleValue;
  children: React.ReactElement;
}

export const Size = styled<React.FunctionComponent<SizeProps>>(({
  children,
  ...props
}) => React.cloneElement(children as any, removeNonHTMLProps(props)))`
  width: ${props => props.width && toRem(props.width)};
  min-width: ${props => props.minWidth && toRem(props.minWidth)};
  max-width: ${props => props.maxWidth && toRem(props.maxWidth)};
  height: ${props => props.height && toRem(props.height)};
  min-height: ${props => props.minHeight && toRem(props.minHeight)};
  max-height: ${props => props.maxHeight && toRem(props.maxHeight)};
`;
