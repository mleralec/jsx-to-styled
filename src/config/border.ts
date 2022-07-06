import type * as CSS from 'csstype'

import type { Props, ThemeProp, Config, ThemeValues } from '../types'
import { getStyles } from '../utils'

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

const config: Config[] = [
  { property: 'border' },
  { property: 'borderWidth', scope: 'borderWidths' },
  { property: 'borderStyle' },
  { property: 'borderColor', scope: 'colors' },
  { property: 'borderRadius', scope: 'radii' },
  { property: 'borderTop' },
  { property: 'borderTopWidth', scope: 'borderWidths' },
  { property: 'borderTopStyle' },
  { property: 'borderTopColor', scope: 'colors' },
  { property: 'borderTopLeftRadius', scope: 'radii' },
  { property: 'borderTopRightRadius', scope: 'radii' },
  { property: 'borderRight' },
  { property: 'borderRightWidth', scope: 'borderWidths' },
  { property: 'borderRightStyle' },
  { property: 'borderRightColor', scope: 'colors' },
  { property: 'borderBottom' },
  { property: 'borderBottomWidth', scope: 'borderWidths' },
  { property: 'borderBottomStyle' },
  { property: 'borderBottomColor', scope: 'colors' },
  { property: 'borderBottomLeftRadius', scope: 'radii' },
  { property: 'borderBottomRightRadius', scope: 'radii' },
  { property: 'borderLeft' },
  { property: 'borderLeftWidth', scope: 'borderWidths' },
  { property: 'borderLeftStyle' },
  { property: 'borderLeftColor', scope: 'colors' },
]

export const border = (props: BorderProps & ThemeProp) => {
  return getStyles(config, props)
}
