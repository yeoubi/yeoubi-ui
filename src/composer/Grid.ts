import { css } from 'styled-components';
import { media } from '../internal';

const calculateWidth = (value?: number) => `${(value || 12) / 12 * 100}%`

export interface GridProps {
  sm?: number;
  md?: number;
  lg?: number;
}

export const Grid = css<GridProps>`
  ${media.sm`
    width: ${props => calculateWidth(props.sm)};
  `}

  ${media.md`
    width: ${props => calculateWidth(props.md)};
  `}

  ${media.lg`
    width: ${props => calculateWidth(props.lg)};
  `}
`;
