import {
  parse,
  ResponsiveValue,
} from './core';

const config = {
  src: {
    property: 'src',
  },
  fit: {
    property: 'objectFit',
  },
};

export type ImgProps = {
  src?: ResponsiveValue<string>;
  fit?: ResponsiveValue<string>;
};

export const img = parse(config);
