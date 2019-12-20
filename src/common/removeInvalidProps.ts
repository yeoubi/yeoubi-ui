const INVALID_PROPS = [
  'bgImage',
  'bgSize',
  'bgRepeat',
  'bgPosition',
  'border',
  'borderRadius',
  'borderWidth',
  'bt',
  'bb',
  'br',
  'bl',
  'btlRadius',
  'btrRadius',
  'bblRadius',
  'bbrRadius',
  'color',
  'bgColor',
  'flexDirection',
  'flexWrap',
  'justifyContent',
  'alignItems',
  'alignSelf',
  'fit',
  'display',
  'flex',
  'overflow',
  'position',
  'top',
  'bottom',
  'left',
  'right',
  'zIndex',
  'width',
  'minWidth',
  'maxWidth',
  'height',
  'minHeight',
  'maxHeight',
  'size',
  'p',
  'pt',
  'pb',
  'pl',
  'pr',
  'ph',
  'pv',
  'm',
  'mt',
  'mb',
  'ml',
  'mr',
  'mh',
  'mv',
  'fontFamily',
  'fontSize',
  'fontWeight',
  'lineHeight',
  'letterSpacing',
  'textAlign',
  'textDecoration',
  'level',
  'as',
  'full',
  'theme',
];

export function removeInvalidProps<P extends any>(
  props: P,
  invalidProps: string[] = INVALID_PROPS,
  shouldMerge: boolean = false,
): P {
  if (shouldMerge) {
    invalidProps = invalidProps.concat(INVALID_PROPS);
  }

  return Object.keys(props).reduce((newProps, key) => ({
    ...newProps,
    ...(invalidProps.includes(key) ? {} : { [key]: props[key] }),
  }), {}) as any;
};
