import styled, { withTheme } from 'styled-components';
import {
  size,
  space,
  layout,
  flexbox,
  color,
  border,
  background,
  position,
  typography,
  SizeProps,
  SpaceProps,
  LayoutProps,
  FlexboxProps,
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
  FlexboxProps &
  ColorProps &
  BorderProps &
  BackgroundProps &
  PositionProps &
  TypographyProps & {
    as?: any;
  };

const BoxComponent: React.FunctionComponent<BoxProps & ThemeProps> = styled.div<BoxProps>`
  ${size}
  ${space}
  ${layout}
  ${flexbox}
  ${color}
  ${border}
  ${background}
  ${position}
  ${typography}
`;

export const Box = withTheme(BoxComponent);
