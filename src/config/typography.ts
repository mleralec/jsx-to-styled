import type * as CSS from 'csstype'

import type { Config, Props, ThemeValues } from '../types'
import { compose } from '../utils'

export type TypographyProps = Props<{
  fontFamily: ThemeValues<'fonts'> | CSS.Property.FontFamily
  fontSize: ThemeValues<'fontSizes'> | CSS.Property.FontSize
  fontWeight: ThemeValues<'fontWeights'> | CSS.Property.FontWeight
  lineHeight: ThemeValues<'lineHeights'> | CSS.Property.LineHeight
  letterSpacing: ThemeValues<'letterSpacings'> | CSS.Property.LetterSpacing
  textAlign: CSS.Property.TextAlign
  fontStyle: CSS.Property.FontStyle
  textDecoration: CSS.Property.TextDecoration
}>

export const typographyConfig: Config[] = [
  { jsxProperty: 'fontFamily', scope: 'fonts' },
  { jsxProperty: 'fontSize', scope: 'fontSizes' },
  { jsxProperty: 'fontWeight', scope: 'fontWeights' },
  { jsxProperty: 'lineHeight', scope: 'lineHeights' },
  { jsxProperty: 'letterSpacing', scope: 'letterSpacings' },
  { jsxProperty: 'textAlign' },
  { jsxProperty: 'fontStyle' },
  { jsxProperty: 'textDecoration' },
]

export const typography = compose(typographyConfig)
