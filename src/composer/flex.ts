import {
  parse,
  ResponsiveValue,
} from './core';

const config = {
  flexDirection: {
    property: 'flexDirection',
  },
  flexWrap: {
    property: 'flexWrap',
  },
  justifyContent: {
    property: 'justifyContent',
  },
  alignItems: {
    property: 'alignItems',
  },
  alignSelf: {
    property: 'alignSelf',
  },
};

export type FlexboxProps = {
  flexDirection?: ResponsiveValue<string>;
  flexWrap?: ResponsiveValue<string>;
  justifyContent?: ResponsiveValue<string>;
  alignItems?: ResponsiveValue<string>;
  alignSelf?: ResponsiveValue<string>;
};

export const flexbox = parse(config);
