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
  removeInvalidProps,
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
    level?: number;
    full?: boolean;
  };

const LinkElement: React.FunctionComponent<LinkProps> = styled((props: LinkProps) => (
  <RouterLink {...removeInvalidProps(props)} />
))`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;

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
    level = 0,
    full = false,
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
      fontSize={level ? fontSizes[level + 3] : undefined}
      lineHeight={level ? lineHeights[level + 3] : undefined}
      display={full ? 'flex' : undefined}
      width={full ? '100%' : undefined}
      {...props}
    />
  );
};

export const Link = withTheme(LinkComponent);
