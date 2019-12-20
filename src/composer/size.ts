import {
  parse,
  ResponsiveValue,
} from './core';

const config = {
  width: {
    property: 'width',
  },
  minWidth: {
    property: 'minWidth',
  },
  maxWidth: {
    property: 'maxWidth',
  },
  height: {
    property: 'height',
  },
  minHeight: {
    property: 'minHeight',
  },
  maxHeight: {
    property: 'maxHeight',
  },
  size: {
    properties: ['width', 'height'],
  },
};

type SizeValue = ResponsiveValue<string | number>;

export type SizeProps = {
  width?: SizeValue;
  minWidth?: SizeValue;
  maxWidth?: SizeValue;
  height?: SizeValue;
  minHeight?: SizeValue;
  maxHeight?: SizeValue;
  size?: SizeValue;
};

export const size = parse(config);
