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

export type Theme = Partial<Record<ThemeKeys, Record<string, string>>>
