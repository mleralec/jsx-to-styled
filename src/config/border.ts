import type * as CSS from 'csstype'
import type { CSSObject } from 'styled-components'

import type { Props, ThemeProp, ThemeValues } from '../types'
import { get } from '../utils'

export type BorderProps = Props<{
  border: CSS.Property.Border
  borderWidth: ThemeValues<'borderWidths'> | CSS.Property.BorderWidth
  borderStyle: CSS.Property.BorderStyle
  borderColor: ThemeValues<'colors'> | CSS.Property.BorderColor
  borderRadius: ThemeValues<'radii'> | CSS.Property.BorderRadius
  borderTop: CSS.Property.BorderTop
  borderTopWidth: ThemeValues<'borderWidths'> | CSS.Property.BorderTopWidth
  borderTopStyle: CSS.Property.BorderTopStyle
  borderTopColor: ThemeValues<'colors'> | CSS.Property.BorderTopColor
  borderTopLeftRadius: ThemeValues<'radii'> | CSS.Property.BorderTopLeftRadius
  borderTopRightRadius: ThemeValues<'radii'> | CSS.Property.BorderTopRightRadius
  borderRight: CSS.Property.BorderRight
  borderRightWidth: ThemeValues<'borderWidths'> | CSS.Property.BorderRightWidth
  borderRightStyle: CSS.Property.BorderRightStyle
  borderRightColor: ThemeValues<'colors'> | CSS.Property.BorderRightColor
  borderBottom: CSS.Property.BorderBottom
  borderBottomWidth: ThemeValues<'borderWidths'> | CSS.Property.BorderBottomWidth
  borderBottomStyle: CSS.Property.BorderBottomStyle
  borderBottomColor: ThemeValues<'colors'> | CSS.Property.BorderBottomColor
  borderBottomLeftRadius: ThemeValues<'radii'> | CSS.Property.BorderBottomLeftRadius
  borderBottomRightRadius: ThemeValues<'radii'> | CSS.Property.BorderBottomRightRadius
  borderLeft: CSS.Property.BorderLeft
  borderLeftWidth: ThemeValues<'borderWidths'> | CSS.Property.BorderLeftWidth
  borderLeftStyle: CSS.Property.BorderLeftStyle
  borderLeftColor: ThemeValues<'colors'> | CSS.Property.BorderLeftColor
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
