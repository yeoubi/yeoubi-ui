import { css } from 'styled-components';
import {
  toRem,
  StyleValue,
} from '../internal';

export interface BorderProps {
  border?: string;
  borderWidth?: StyleValue;
  borderRadius?: StyleValue;
  bt?: string;
  bb?: string;
  bl?: string;
  br?: string;
}

const getBorderValue = (style?: string, width?: StyleValue, position?: string) => {
  const colorOnly = style && style.split(' ').length === 1;

  if (!style) {
    return position ? undefined : 'border: none';
  }

  const key = `border${position ? `-${position}` : ''}`;
  const value = `${colorOnly ? `${toRem(width || 1)} solid ${style}` : style}`;
  return `${key}: ${value}`;
}

export const Border = css<BorderProps>`
  border-radius: ${props => toRem(props.borderRadius)};
  ${props => getBorderValue(props.border, props.borderWidth)};
  ${props => getBorderValue(props.border || props.bt, props.borderWidth, 'top')};
  ${props => getBorderValue(props.border || props.bb, props.borderWidth, 'bottom')};
  ${props => getBorderValue(props.border || props.bl, props.borderWidth, 'left')};
  ${props => getBorderValue(props.border || props.br, props.borderWidth, 'right')};
`;
