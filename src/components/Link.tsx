import React from 'react';
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from 'react-router-dom';
import styled, { withTheme } from 'styled-components';
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
  DEFAULT_FONT_SIZES,
  DEFAULT_LINE_HEIGHTS,
} from '../internal';

export type LinkProps = SizeProps &
  SpaceProps &
  LayoutProps &
  ColorProps &
  BorderProps &
  BackgroundProps &
  PositionProps &
  TypographyProps &
  RouterLinkProps & {
    level: number;
    full?: boolean;
  };

const LinkElement: React.FunctionComponent<LinkProps> = styled(RouterLink)<LinkProps>`
  ${size}
  ${space}
  ${layout}
  ${color}
  ${border}
  ${background}
  ${position}
  ${typography}
`;

const LinkComponent: React.FunctionComponent<LinkProps & ThemeProps> = (props) => {
  const {
    theme: {
      fontSizes = DEFAULT_FONT_SIZES,
      lineHeights = DEFAULT_LINE_HEIGHTS,
      fonts: {
        body = undefined,
      } = {},
    } = {},
  } = props;

  return (
    <LinkElement
      fontFamily={body}
      fontSize={fontSizes[props.level + 3]}
      lineHeight={lineHeights[props.level + 3]}
      display={props.full ? 'block' : undefined}
      width={props.full ? '100%' : undefined}
      {...props}
    />
  );
};

export const Link = withTheme(LinkComponent);
