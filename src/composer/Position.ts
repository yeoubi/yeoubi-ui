import { css } from 'styled-components';
import {
  toRem,
  StyleValue,
} from '../internal';

export interface PositionProps {
  position?: 'absolute' | 'fixed' | 'relative';
  top?: StyleValue;
  bottom?: StyleValue;
  left?: StyleValue;
  right?: StyleValue;
  zIndex?: StyleValue;
}

export const Position = css<PositionProps>`
  position: ${props => props.position || 'relative'};
  top: ${props => toRem(props.top)};
  bottom: ${props => toRem(props.bottom)};
  left: ${props => toRem(props.left)};
  right: ${props => toRem(props.right)};
  z-index: ${props => props.zIndex};
`;
