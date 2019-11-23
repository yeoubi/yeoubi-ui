const INVALID_PROPS = [
  'p',
  'pt',
  'pb',
  'pl',
  'pr',
  'm',
  'mt',
  'mb',
  'ml',
  'mr',
  'width',
  'minWidth',
  'maxWidth',
  'height',
  'minHeight',
  'maxHeight',
  'color',
  'bgColor',
  'fontWeight',
  'textAlign',
  'textDecoration',
  'letterSpacing',
  'bold',
  'border',
  'borderRadius',
  'borderWidth',
  'inline',
  'level',
  'password',
  'bgImage',
];

export const removeNonHTMLProps = (
  props: { [key: string]: any },
  invalidProps: string[] = INVALID_PROPS,
  shouldMerge: boolean = false,
): { [key: string]: any } => {
  if (shouldMerge) {
    invalidProps = invalidProps.concat(INVALID_PROPS);
  }

  return Object.keys(props).reduce((newProps, key) => ({
    ...newProps,
    ...(invalidProps.includes(key) ? {} : { [key]: props[key] }),
  }), {});
};
