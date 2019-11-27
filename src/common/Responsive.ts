import {
  css,
  CSSObject,
  InterpolationFunction,
  ThemedStyledProps,
  Interpolation,
} from 'styled-components';

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
