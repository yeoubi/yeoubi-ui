import { css } from 'styled-components';

export interface CommonProps {
  flex?: number;
  overflow?: 'visible' | 'hidden' | 'scroll';
}

export const Common = css<CommonProps>`
  flex: ${props => props.flex};
  overflow: ${props => props.overflow};
`;
