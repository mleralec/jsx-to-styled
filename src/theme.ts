/* eslint-disable @typescript-eslint/no-explicit-any */

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
  | (string & Record<never, never>)

/**
 * import 'jsx-to-styled'
 * import { theme } from './index'
 *
 * type MyTheme = typeof theme
 *
 * declare module 'jsx-to-styled' {
 *   export interface Theme extends MyTheme {}
 * }
 */
export interface Theme {
  [key: string]: any
}
