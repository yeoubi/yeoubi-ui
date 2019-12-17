import {
  css,
  CSSObject,
  InterpolationFunction,
  ThemedStyledProps,
  Interpolation,
} from 'styled-components';

export type ResponsiveValue<T> = T | T[];

export function unwrap<T>(value: ResponsiveValue<T>, index: number) {
  if (!Array.isArray(value)) {
    return value;
  }

  const safeIndex = Math.min(value.length - 1, index);

  return value[safeIndex];
}

export const media = {
  sm: <T extends object> (
    args: TemplateStringsArray | CSSObject | InterpolationFunction<ThemedStyledProps<T, {}>>,
    ...interpolations: Array<Interpolation<ThemedStyledProps<T, {}>>>
  ) => css<T>`
    @media (max-width: 425px) {
      ${css<T>(args, ...interpolations)}
    }
  `,
  md: <T extends object> (
    args: TemplateStringsArray | CSSObject | InterpolationFunction<ThemedStyledProps<T, {}>>,
    ...interpolations: Array<Interpolation<ThemedStyledProps<T, {}>>>
  ) => css<T>`
    @media (min-width: 426px) and (max-width: 1023px) {
      ${css<T>(args, ...interpolations)}
    }
  `,
  lg: <T extends object> (
    args: TemplateStringsArray | CSSObject | InterpolationFunction<ThemedStyledProps<T, {}>>,
    ...interpolations: Array<Interpolation<ThemedStyledProps<T, {}>>>
  ) => css<T>`
    @media (min-width: 1024px) {
      ${css<T>(args, ...interpolations)}
    }
  `,
};
