import {
  parse,
  compose,
  ResponsiveValue,
} from './core';

const config = {
  margin: {
    m: {
      property: 'margin',
    },
    mt: {
      property: 'marginTop',
    },
    mb: {
      property: 'marginBottom',
    },
    ml: {
      property: 'marginLeft',
    },
    mr: {
      property: 'marginRight',
    },
    mh: {
      properties: ['marginLeft', 'marginRight'],
    },
    mv: {
      properties: ['marginTop', 'marginBottom'],
    },
  },
  padding: {
    p: {
      property: 'padding',
    },
    pt: {
      property: 'paddingTop',
    },
    pb: {
      property: 'paddingBottom',
    },
    pl: {
      property: 'paddingLeft',
    },
    pr: {
      property: 'paddingRight',
    },
    ph: {
      properties: ['paddingLeft', 'paddingRight'],
    },
    pv: {
      properties: ['paddingTop', 'paddingBottom'],
    },
  },
};

type SpaceValue = ResponsiveValue<string | number>;

export type SpaceProps = {
  m?: SpaceValue;
  mt?: SpaceValue;
  mb?: SpaceValue;
  ml?: SpaceValue;
  mr?: SpaceValue;
  mh?: SpaceValue;
  mv?: SpaceValue;
  p?: SpaceValue;
  pt?: SpaceValue;
  pb?: SpaceValue;
  pl?: SpaceValue;
  pr?: SpaceValue;
  ph?: SpaceValue;
  pv?: SpaceValue;
};

const margin = parse(config.margin);
const padding = parse(config.padding);

export const space = compose(margin, padding);
