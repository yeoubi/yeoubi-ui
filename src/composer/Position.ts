import { css } from 'styled-components';
import { StyleValue } from '../internal';

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
  top: ${props => props.top};
  bottom: ${props => props.bottom};
  left: ${props => props.left};
  right: ${props => props.right};
  z-index: ${props => props.zIndex};
`;
