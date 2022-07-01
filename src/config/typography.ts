import type * as CSS from 'csstype'

import type { Theme } from '../theme'
import { get } from '../utils'

export type TypographyProps = Partial<{
  fontFamily: keyof Theme['fonts'] | CSS.Property.FontFamily
  fontSize: keyof Theme['fontSizes'] | CSS.Property.FontSize
  fontWeight: keyof Theme['fontWeights'] | CSS.Property.FontWeight
  lineHeight: keyof Theme['lineHeights'] | CSS.Property.LineHeight
  letterSpacing: keyof Theme['letterSpacings'] | CSS.Property.LetterSpacing
  textAlign: CSS.Property.TextAlign
  fontStyle: CSS.Property.FontStyle
}>

export const typography = (props: TypographyProps & { theme?: Theme }) => {
  return {
    fontFamily: get(props.fontFamily, props.theme, 'fonts'),
    fontSize: get(props.fontSize, props.theme, 'fontSizes'),
    fontWeight: get(props.fontWeight, props.theme, 'fontWeights'),
    letterSpacing: get(props.letterSpacing, props.theme, 'letterSpacings'),
    textAlign: props.textAlign,
    fontStyle: props.fontStyle,
  }
}
