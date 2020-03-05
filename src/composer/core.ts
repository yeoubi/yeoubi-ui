import merge from 'lodash/merge';
import { DEFAULT_BREAKPOINTS } from '../internal'

type PropertyConfig = {
  property?: string;
  properties?: string[];
  transform?: (value: any) => any;
};

type StyleConfig = {
  [key: string]: PropertyConfig;
};

type StyleFunction = {
  (props: any): Record<string, any>;
  config?: StyleConfig;
};

export type ResponsiveValue<T> = T | (T | undefined)[];

function mergeStyle(
  style: any,
  value: any,
  config: PropertyConfig,
) {
  if (config.property) {
    return merge(style, {
      [config.property]: value,
    });
  }

  if (config.properties) {
    return merge(style, config.properties.reduce((result, property) => ({
      ...result,
      [property]: value,
    }), {}));
  }

  return style;
};

function mergeResponsiveStyle(
  breakpoints: any[],
  style: any,
  values: any[],
  config: PropertyConfig,
) {
  const minWidth = (i: number) => breakpoints[Math.min(i, breakpoints.length - 1)];

  return merge(style, values.reduce((result, value, i) => ({
    ...result,
    [`@media (min-width: ${minWidth(i)})`]: mergeStyle({}, value, config),
  }), {}));
};

export function parse(styleConfig: StyleConfig) {
  const parser: StyleFunction = (props) => {
    return Object
      .entries(styleConfig)
      .reduce((style, [key, config]) => {
        const value = props[key];
        const transform = config.transform || (v => v);

        if (value === undefined) {
          return style;
        }

        if (Array.isArray(value)) {
          const breakpoints = (props.theme && props.theme.breakpoints) || DEFAULT_BREAKPOINTS;
          return mergeResponsiveStyle(breakpoints, style, value.map(v => transform(v)), config);
        }

        return mergeStyle(style, transform(value), config);
      }, {});
  };

  parser.config = styleConfig;

  return parser;
};

export function compose(...parsers: StyleFunction[]) {
  const config: StyleConfig = parsers
    .filter(parser => parser.config)
    .reduce((result, parser) => ({ ...result, ...parser.config }), {});

  return parse(config);
};
