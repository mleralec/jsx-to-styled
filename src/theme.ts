export type ThemeKeys =
  | 'colors'
  | 'spaces'
  | 'sizes'
  | 'fonts'
  | 'fontSizes'
  | 'fontWeights'
  | 'lineHeights'
  | 'letterSpacings'
  | 'borderWidths'
  | 'radii'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Theme extends Partial<Record<ThemeKeys, Record<string, string>>> {}
