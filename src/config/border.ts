import type * as CSS from 'csstype'
import type { CSSObject } from 'styled-components'

import type { Props, ThemeProp } from '../types'
import type { Theme } from '../theme'
import { get } from '../utils'

export type BorderProps = Props<{
  border: CSS.Property.Border
  borderWidth: keyof Theme['borderWidths'] | CSS.Property.BorderWidth
  borderStyle: CSS.Property.BorderStyle
  borderColor: keyof Theme['colors'] | CSS.Property.BorderColor
  borderRadius: keyof Theme['radii'] | CSS.Property.BorderRadius
  borderTop: CSS.Property.BorderTop
  borderTopWidth: keyof Theme['borderWidths'] | CSS.Property.BorderTopWidth
  borderTopStyle: CSS.Property.BorderTopStyle
  borderTopColor: keyof Theme['colors'] | CSS.Property.BorderTopColor
  borderTopLeftRadius: keyof Theme['radii'] | CSS.Property.BorderTopLeftRadius
  borderTopRightRadius: keyof Theme['radii'] | CSS.Property.BorderTopRightRadius
  borderRight: CSS.Property.BorderRight
  borderRightWidth: keyof Theme['borderWidths'] | CSS.Property.BorderRightWidth
  borderRightStyle: CSS.Property.BorderRightStyle
  borderRightColor: keyof Theme['colors'] | CSS.Property.BorderRightColor
  borderBottom: CSS.Property.BorderBottom
  borderBottomWidth: keyof Theme['borderWidths'] | CSS.Property.BorderBottomWidth
  borderBottomStyle: CSS.Property.BorderBottomStyle
  borderBottomColor: keyof Theme['colors'] | CSS.Property.BorderBottomColor
  borderBottomLeftRadius: keyof Theme['radii'] | CSS.Property.BorderBottomLeftRadius
  borderBottomRightRadius: keyof Theme['radii'] | CSS.Property.BorderBottomRightRadius
  borderLeft: CSS.Property.BorderLeft
  borderLeftWidth: keyof Theme['borderWidths'] | CSS.Property.BorderLeftWidth
  borderLeftStyle: CSS.Property.BorderLeftStyle
  borderLeftColor: keyof Theme['colors'] | CSS.Property.BorderLeftColor
}>

export const border = (props: BorderProps & ThemeProp): CSSObject => {
  return {
    border: props.border,
    borderWidth: get(props.borderWidth, props.theme, 'borderWidths'),
    borderStyle: props.borderStyle,
    borderColor: get(props.borderColor, props.theme, 'colors'),
    borderRadius: get(props.borderRadius, props.theme, 'radii'),
    borderTop: props.borderTop,
    borderTopWidth: get(props.borderTopWidth, props.theme, 'borderWidths'),
    borderTopStyle: props.borderTopStyle,
    borderTopColor: get(props.borderTopColor, props.theme, 'colors'),
    borderTopLeftRadius: get(props.borderTopLeftRadius, props.theme, 'radii'),
    borderTopRightRadius: get(props.borderTopRightRadius, props.theme, 'radii'),
    borderRight: props.borderRight,
    borderRightWidth: get(props.borderRightWidth, props.theme, 'borderWidths'),
    borderRightStyle: props.borderRightStyle,
    borderRightColor: get(props.borderRightColor, props.theme, 'colors'),
    borderBottom: props.borderBottom,
    borderBottomWidth: get(props.borderBottomWidth, props.theme, 'borderWidths'),
    borderBottomStyle: props.borderBottomStyle,
    borderBottomColor: get(props.borderBottomColor, props.theme, 'colors'),
    borderBottomLeftRadius: get(props.borderBottomLeftRadius, props.theme, 'radii'),
    borderBottomRightRadius: get(props.borderBottomRightRadius, props.theme, 'radii'),
    borderLeft: props.borderLeft,
    borderLeftWidth: get(props.borderLeftWidth, props.theme, 'borderWidths'),
    borderLeftStyle: props.borderLeftStyle,
    borderLeftColor: get(props.borderLeftColor, props.theme, 'colors'),
  }
}
