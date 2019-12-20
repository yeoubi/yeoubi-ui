import {
  parse,
  ResponsiveValue,
} from './core';

const config = {
  position: {
    property: 'position',
  },
  top: {
    property: 'top',
  },
  bottom: {
    property: 'bottom',
  },
  left: {
    property: 'left',
  },
  right: {
    property: 'right',
  },
  zIndex: {
    property: 'zIndex',
  },
};

export type PositionProps = {
  position?: ResponsiveValue<string>;
  top?: ResponsiveValue<number>;
  bottom?: ResponsiveValue<number>;
  left?: ResponsiveValue<number>;
  right?: ResponsiveValue<number>;
  zIndex?: ResponsiveValue<number>;
};

export const position = parse(config);
