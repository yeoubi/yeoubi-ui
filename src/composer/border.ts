import {
  parse,
  ResponsiveValue,
} from './core';

const borderTransform = (value: string) => value.includes(' ') || value === 'none'
  ? value
  : `1px solid ${value}`;

const config = {
  border: {
    property: 'border',
    transform: borderTransform,
  },
  borderWidth: {
    property: 'borderWidth',
  },
  borderRadius: {
    property: 'borderRadius',
  },
  bt: {
    property: 'borderTop',
    transform: borderTransform,
  },
  bb: {
    property: 'borderBottom',
    transform: borderTransform,
  },
  bl: {
    property: 'borderLeft',
    transform: borderTransform,
  },
  br: {
    property: 'borderRight',
    transform: borderTransform,
  },
  btlRadius: {
    property: 'borderBottomLeftRadius',
  },
  btrRadius: {
    property: 'borderBottomRightRadius',
  },
  bblRadius: {
    property: 'borderBottomLeftRadius',
  },
  bbrRadius: {
    property: 'borderBottomRightRadius',
  },
};

export type BorderProps = {
  border?: ResponsiveValue<string>;
  borderWidth?: ResponsiveValue<number>;
  borderRadius?: ResponsiveValue<number>;
  bt?: ResponsiveValue<string>;
  bb?: ResponsiveValue<string>;
  bl?: ResponsiveValue<string>;
  br?: ResponsiveValue<string>;
  btlRadius?: ResponsiveValue<number>,
  btrRadius?: ResponsiveValue<number>,
  bblRadius?: ResponsiveValue<number>,
  bbrRadius?: ResponsiveValue<number>,
};

export const border = parse(config);
