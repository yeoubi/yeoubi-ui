import { css } from 'styled-components';

export interface BackgroundProps {
  bgColor?: string;
  bgImage?: string;
}

export const Background = css<BackgroundProps>`
  background-color: ${props => props.bgColor};
  ${props => props.bgImage && css`
    background-image: url("${props.bgImage}");
    background-position: top, center;
    background-repeat: no-repeat;
    background-size: contain;
  `}
`;
