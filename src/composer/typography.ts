import {
  parse,
  ResponsiveValue,
} from './core';

const config = {
  fontFamily: {
    property: 'fontFamily',
  },
  fontSize: {
    property: 'fontSize',
    transform: (value: number) => `${value}px`,
  },
  fontWeight: {
    property: 'fontWeight',
  },
  lineHeight: {
    property: 'lineHeight',
    transform: (value: number) => `${value}px`,
  },
  letterSpacing: {
    property: 'letterSpacing',
  },
  textAlign: {
    property: 'textAlign',
  },
  textDecoration: {
    property: 'textDecoration',
  },
};

export type TypographyProps = {
  fontFamily?: ResponsiveValue<string>;
  fontSize?: ResponsiveValue<number>;
  fontWeight?: ResponsiveValue<string | number>;
  lineHeight?: ResponsiveValue<number>;
  letterSpacing?: ResponsiveValue<number>;
  textAlign?: ResponsiveValue<string>;
  textDecoration?: ResponsiveValue<string>;
};

export const typography = parse(config);
