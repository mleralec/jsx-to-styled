import type * as CSS from 'csstype'

import type { Config, Props, ThemeProp, ThemeValues } from '../types'
import { getStyles } from '../utils'

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

const config: Config[] = [
  { property: 'fontFamily', scope: 'fonts' },
  { property: 'fontSize', scope: 'fontSizes' },
  { property: 'fontWeight', scope: 'fontWeights' },
  { property: 'lineHeight', scope: 'lineHeights' },
  { property: 'letterSpacing', scope: 'letterSpacings' },
  { property: 'textAlign' },
  { property: 'fontStyle' },
  { property: 'textDecoration' },
]

export const typography = (props: TypographyProps & ThemeProp) => {
  return getStyles(config, props)
}
