import React from 'react';
import styled from 'styled-components';
import {
  removeNonHTMLProps,
  toRem,
  StyleValue,
} from '..';

export interface SpaceProps {
  p?: StyleValue;
  pt?: StyleValue;
  pb?: StyleValue;
  pl?: StyleValue;
  pr?: StyleValue;
  pv?: StyleValue;
  ph?: StyleValue;
  m?: StyleValue;
  mt?: StyleValue;
  mb?: StyleValue;
  ml?: StyleValue;
  mr?: StyleValue;
  mv?: StyleValue;
  mh?: StyleValue;
  top?: StyleValue;
  bottom?: StyleValue;
  left?: StyleValue;
  right?: StyleValue;
  zIndex?: StyleValue;
  children: React.ReactElement;
}

const getSpaceValue = (
  all: StyleValue,
  top: StyleValue,
  right: StyleValue,
  bottom: StyleValue,
  left: StyleValue,
  vertical: StyleValue,
  horizontal: StyleValue,
) => (all || top || right || bottom || left || vertical || horizontal) === undefined ? undefined : [
    toRem(all, vertical, top, 0),
    toRem(all, horizontal, right, 0),
    toRem(all, vertical, bottom, 0),
    toRem(all, horizontal, left, 0)
  ].join(' ');

const Container = styled<React.FunctionComponent<SpaceProps>>(({
  children,
  ...props
}) => React.cloneElement(children as any, removeNonHTMLProps(props)))`
  padding: ${({ p, pt, pr, pb, pl, pv, ph }) => getSpaceValue(p, pt, pr, pb, pl, pv, ph)};
  margin: ${({ m, mt, mr, mb, ml, mv, mh }) => getSpaceValue(m, mt, mr, mb, ml, mv, mh)};
  top: ${({ top }) => top};
  bottom: ${({ bottom }) => bottom};
  left: ${({ left }) => left};
  right: ${({ right }) => right};
  z-index: ${({ zIndex }) => zIndex};
`;

export const Space = React.memo(Container);
