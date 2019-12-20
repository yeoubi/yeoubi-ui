import {
  parse,
  ResponsiveValue,
} from './core';

const config = {
  color: {
    property: 'color',
  },
  bgColor: {
    property: 'backgroundColor',
  },
};

export type ColorProps = {
  color?: ResponsiveValue<string>;
  bgColor?: ResponsiveValue<string>;
};

export const color = parse(config);
