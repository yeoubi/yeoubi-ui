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
  'center',
  'vcenter',
  'vstart',
  'vend',
  'hcenter',
  'hstart',
  'hend',
  'between',
  'around',
  'vertical',
  'serif',
  'bold',
  'radius',
  'level',
  'border',
  'password',
  'bgImage',
  'lineHeight',
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
