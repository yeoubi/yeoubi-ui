import {
  parse,
  ResponsiveValue,
} from './core';

const config = {
  bgImage: {
    property: 'backgroundImage',
  },
  bgSize: {
    property: 'backgroundSize',
  },
  bgRepeat: {
    property: 'backgroundRepeat',
  },
  bgPosition: {
    property: 'backgroundPosition',
  },
};

export type BackgroundProps = {
  bgImage?: ResponsiveValue<string>;
  bgSize?: ResponsiveValue<string>;
  bgRepeat?: ResponsiveValue<string>;
  bgPosition?: ResponsiveValue<string>;
};

export const background = parse(config);
