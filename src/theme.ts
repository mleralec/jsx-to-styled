export type ThemeKeys =
  | 'colors'
  | 'spaces'
  | 'sizes'
  | 'fonts'
  | 'fontSizes'
  | 'fontWeights'
  | 'lineHeights'
  | 'letterSpacings'

export type Theme = Partial<Record<ThemeKeys, Record<string, string>>>
