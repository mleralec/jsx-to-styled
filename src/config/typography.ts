import type * as CSS from 'csstype'

import type { Config, ObjectProps, Props, ThemeValues } from '../types'
import { compose } from '../utils'

export type TypographyProps = Props<{
  $fontFamily: ObjectProps<ThemeValues<'fonts'> | CSS.Property.FontFamily>
  $fontSize: ObjectProps<ThemeValues<'fontSizes'> | CSS.Property.FontSize>
  $fontWeight: ObjectProps<ThemeValues<'fontWeights'> | CSS.Property.FontWeight>
  $lineHeight: ObjectProps<ThemeValues<'lineHeights'> | CSS.Property.LineHeight>
  $letterSpacing: ObjectProps<ThemeValues<'letterSpacings'> | CSS.Property.LetterSpacing>
  $textAlign: ObjectProps<CSS.Property.TextAlign>
  $fontStyle: ObjectProps<CSS.Property.FontStyle>
  $textDecoration: ObjectProps<CSS.Property.TextDecoration>
}>

export const typographyConfig: Config[] = [
  { jsxProperty: '$fontFamily', scope: 'fonts' },
  { jsxProperty: '$fontSize', scope: 'fontSizes' },
  { jsxProperty: '$fontWeight', scope: 'fontWeights' },
  { jsxProperty: '$lineHeight', scope: 'lineHeights' },
  { jsxProperty: '$letterSpacing', scope: 'letterSpacings' },
  { jsxProperty: '$textAlign' },
  { jsxProperty: '$fontStyle' },
  { jsxProperty: '$textDecoration' },
]

export const typography = compose(typographyConfig)
