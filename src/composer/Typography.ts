import { css } from 'styled-components';
import { toRem } from '../internal';

export interface TypographyProps {
  bold?: boolean;
  fontWeight?: number | string;
  color?: string;
  textAlign?: 'justify' | 'center';
  textDecoration?: 'line-through';
  letterSpacing?: number;
}

export const Typography = css<TypographyProps>`
  font-weight: ${props => props.fontWeight || (props.bold && 600)};
  text-align: ${props => props.textAlign};
  text-decoration: ${props => props.textDecoration};
  color: ${props => props.color};
  letter-spacing: ${props => toRem(props.letterSpacing)};
`;
