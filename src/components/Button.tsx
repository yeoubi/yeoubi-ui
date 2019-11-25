import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import {
  Common,
  CommonProps,
  Border,
  BorderProps,
  Background,
  BackgroundProps,
  Position,
  PositionProps,
  Typography,
  TypographyProps,
  removeNonHTMLProps,
  HTMLButtonProps,
  HTMLAnchorProps,
  BODY_STYLE,
} from '../internal';

export type ButtonProps = CommonProps &
  BorderProps &
  BackgroundProps &
  PositionProps &
  TypographyProps &
  HTMLButtonProps &
  HTMLAnchorProps & {
    level: number;
    full?: boolean;
    to?: string;
  };

export const Button = styled<React.FunctionComponent<ButtonProps>>((
  props,
) => props.to ? (
  <Link to={props.to} {...removeNonHTMLProps(props)} />
) : React.createElement(props.href ? 'a' : 'button', removeNonHTMLProps(props)))`
  outline: none;
  ${props => props.full && css`
    display: block;
    width: 100%;
  `}
  ${props => props.disabled && css`
    cursor: not-allowed;
    pointer-events: none;
  `}
  ${props => (props.to || props.href) && css`
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
  `}
  ${props => BODY_STYLE[props.level]}
  ${Typography};
  ${Common}
  ${Border}
  ${Background}
  ${Position}
`;
