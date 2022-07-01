import type * as CSS from 'csstype'
import type { CSSObject } from 'styled-components'

import type { Theme } from '../theme'
import { get } from '../utils'

export type TypographyProps = Partial<{
  fontFamily: keyof Theme['fonts'] | CSS.Property.FontFamily
  fontSize: keyof Theme['fontSizes'] | Exclude<CSS.Property.FontSize, number>
  fontWeight: keyof Theme['fontWeights'] | Exclude<CSS.Property.FontWeight, number>
  lineHeight: keyof Theme['lineHeights'] | Exclude<CSS.Property.LineHeight, number>
  letterSpacing: keyof Theme['letterSpacings'] | Exclude<CSS.Property.LetterSpacing, number>
  textAlign: CSS.Property.TextAlign
  fontStyle: CSS.Property.FontStyle
}>

export const typography = (props: TypographyProps & { theme?: Theme }): CSSObject => {
  return {
    fontFamily: get(props.fontFamily, props.theme, 'fonts'),
    fontSize: get(props.fontSize, props.theme, 'fontSizes'),
    fontWeight: get(props.fontWeight, props.theme, 'fontWeights'),
    letterSpacing: get(props.letterSpacing, props.theme, 'letterSpacings'),
    textAlign: props.textAlign,
    fontStyle: props.fontStyle,
  }
}
