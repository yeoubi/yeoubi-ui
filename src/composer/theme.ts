export interface Theme {
  fonts: {
    heading: string;
    body: string;
    [key: string]: string;
  },
  fontSizes: number[];
  lineHeights: number[];
  breakpoints: string[];
  palette: {
    [key: string]: any;
  };
  [key: string]: any;
}

export interface ThemeProps {
  theme: Theme;
}

export const DEFAULT_FONT_SIZES = [48, 32, 24, 20, 18, 16, 14, 12];

export const DEFAULT_LINE_HEIGHTS = [56, 40, 32, 28, 24, 24, 20, 16];
