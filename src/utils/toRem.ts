import { StyleValue } from '../internal';

export const toRem = (...args: StyleValue[]) => {
  const value = args.filter(arg => arg !== undefined)[0];

  if (value === undefined || typeof value === 'string') {
    return value;
  }

  return `${value / 16}rem`;
}
