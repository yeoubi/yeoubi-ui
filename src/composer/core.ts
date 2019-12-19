type PropertyConfig = {
  property?: string;
  properties?: string[];
};

type StyleConfig = {
  [key: string]: PropertyConfig;
};

type StyleFunction = {
  (props: any): Record<string, any>;
  config?: StyleConfig;
};

export type ResponsiveValue<T> = T | T[];

const defaultBreakpoints = [0, 40, 64].map(n => `${n}rem`);

function mergeStyle(
  style: any,
  value: any,
  config: PropertyConfig,
) {
  if (!value) {
    return style;
  }

  if (config.property) {
    return {
      ...style,
      [config.property]: value,
    };
  }

  if (config.properties) {
    return {
      ...style,
      ...config.properties.reduce((result, property) => ({
        ...result,
        [property]: value,
      }), {}),
    }
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

  return {
    ...style,
    ...values.reduce((result, value, i) => ({
      ...result,
      [`@media (min-width: ${minWidth(i)})`]: mergeStyle({}, value, config),
    }), {}),
  };
};

export function parse(styleConfig: StyleConfig) {
  const parser: StyleFunction = (props) => {
    return Object
      .entries(styleConfig)
      .reduce((style, [key, config]) => {
        const value = props[key];
        
        if (Array.isArray(value)) {
          const breakpoints = (props.theme && props.theme.breakpoints) || defaultBreakpoints;
          return mergeResponsiveStyle(breakpoints, style, value, config);
        }

        return mergeStyle(style, value, config);
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
