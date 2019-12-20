import styled from 'styled-components';
import {
  size,
  space,
  layout,
  color,
  border,
  background,
  position,
  typography,
  SizeProps,
  SpaceProps,
  LayoutProps,
  ColorProps,
  BorderProps,
  BackgroundProps,
  PositionProps,
  TypographyProps,
  ThemeProps,
} from '../internal';

export type BoxProps = SizeProps &
  SpaceProps &
  LayoutProps &
  ColorProps &
  BorderProps &
  BackgroundProps &
  PositionProps &
  TypographyProps & 
  ThemeProps & {
    as?: any;
  };

export const Box: React.FunctionComponent<BoxProps> = styled.div<BoxProps>`
  ${size}
  ${space}
  ${layout}
  ${color}
  ${border}
  ${background}
  ${position}
  ${typography}
`;
