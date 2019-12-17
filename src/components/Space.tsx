import React from 'react';
import styled from 'styled-components';
import {
  media,
  removeNonHTMLProps,
  toRem,
  unwrap,
  StyleValue,
  ResponsiveValue,
} from '../internal';

export interface SpaceProps {
  p?: ResponsiveValue<StyleValue>;
  pt?: ResponsiveValue<StyleValue>;
  pb?: ResponsiveValue<StyleValue>;
  pl?: ResponsiveValue<StyleValue>;
  pr?: ResponsiveValue<StyleValue>;
  pv?: ResponsiveValue<StyleValue>;
  ph?: ResponsiveValue<StyleValue>;
  m?: ResponsiveValue<StyleValue>;
  mt?: ResponsiveValue<StyleValue>;
  mb?: ResponsiveValue<StyleValue>;
  ml?: ResponsiveValue<StyleValue>;
  mr?: ResponsiveValue<StyleValue>;
  mv?: ResponsiveValue<StyleValue>;
  mh?: ResponsiveValue<StyleValue>;
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
    toRem(all, horizontal, left, 0),
    '!important',
  ].join(' ');

export const Space = styled<React.FunctionComponent<SpaceProps>>(({
  children,
  ...props
}) => React.cloneElement(children as any, removeNonHTMLProps(props)))`
  ${media.sm`
    padding: ${({ p, pt, pr, pb, pl, pv, ph }) => getSpaceValue(
      unwrap(p, 0),
      unwrap(pt, 0),
      unwrap(pr, 0),
      unwrap(pb, 0),
      unwrap(pl, 0),
      unwrap(pv, 0),
      unwrap(ph, 0),
    )};
    margin: ${({ m, mt, mr, mb, ml, mv, mh }) => getSpaceValue(
      unwrap(m, 0),
      unwrap(mt, 0),
      unwrap(mr, 0),
      unwrap(mb, 0),
      unwrap(ml, 0),
      unwrap(mv, 0),
      unwrap(mh, 0),
    )};
  `}
  ${media.md`
    padding: ${({ p, pt, pr, pb, pl, pv, ph }) => getSpaceValue(
      unwrap(p, 1),
      unwrap(pt, 1),
      unwrap(pr, 1),
      unwrap(pb, 1),
      unwrap(pl, 1),
      unwrap(pv, 1),
      unwrap(ph, 1),
    )};
    margin: ${({ m, mt, mr, mb, ml, mv, mh }) => getSpaceValue(
      unwrap(m, 1),
      unwrap(mt, 1),
      unwrap(mr, 1),
      unwrap(mb, 1),
      unwrap(ml, 1),
      unwrap(mv, 1),
      unwrap(mh, 1),
    )};
  `}
  ${media.lg`
    padding: ${({ p, pt, pr, pb, pl, pv, ph }) => getSpaceValue(
      unwrap(p, 2),
      unwrap(pt, 2),
      unwrap(pr, 2),
      unwrap(pb, 2),
      unwrap(pl, 2),
      unwrap(pv, 2),
      unwrap(ph, 2),
    )};
    margin: ${({ m, mt, mr, mb, ml, mv, mh }) => getSpaceValue(
      unwrap(m, 2),
      unwrap(mt, 2),
      unwrap(mr, 2),
      unwrap(mb, 2),
      unwrap(ml, 2),
      unwrap(mv, 2),
      unwrap(mh, 2),
    )};
  `}
`;
