import { css } from 'styled-components';
import {
  toRem,
  StyleValue,
} from '../internal';

export interface TypographyProps {
  bold?: boolean;
  fontWeight?: number | string;
  color?: string;
  textAlign?: 'justify' | 'center';
  textDecoration?: 'line-through';
  lineHeight?: StyleValue;
  letterSpacing?: number;
  keepWord?: boolean;
}

export const Typography = css<TypographyProps>`
  font-weight: ${props => props.fontWeight || (props.bold && 600)};
  text-align: ${props => props.textAlign};
  text-decoration: ${props => props.textDecoration};
  color: ${props => props.color};
  line-height: ${props => toRem(props.lineHeight)};
  letter-spacing: ${props => toRem(props.letterSpacing)};
  ${props => props.keepWord && css`
    word-break: keep-all;
    word-wrap: break-word;
  `}
`;
