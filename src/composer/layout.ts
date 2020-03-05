import {
  parse,
  ResponsiveValue,
} from './core';

const config = {
  display: {
    property: 'display',
  },
  flex: {
    property: 'flex',
  },
  overflow: {
    property: 'overflow',
  },
};

export type LayoutProps = {
  display?: ResponsiveValue<string>;
  flex?: ResponsiveValue<number | string>;
  overflow?: ResponsiveValue<string>;
};

export const layout = parse(config);
