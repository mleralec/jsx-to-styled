import type * as CSS from 'csstype'

import type { Props, Config, ThemeValues } from '../types'
import { compose } from '../utils'

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

export const borderConfig: Config[] = [
  { jsxProperty: 'border' },
  { jsxProperty: 'borderWidth', scope: 'borderWidths' },
  { jsxProperty: 'borderStyle' },
  { jsxProperty: 'borderColor', scope: 'colors' },
  { jsxProperty: 'borderRadius', scope: 'radii' },
  { jsxProperty: 'borderTop' },
  { jsxProperty: 'borderTopWidth', scope: 'borderWidths' },
  { jsxProperty: 'borderTopStyle' },
  { jsxProperty: 'borderTopColor', scope: 'colors' },
  { jsxProperty: 'borderTopLeftRadius', scope: 'radii' },
  { jsxProperty: 'borderTopRightRadius', scope: 'radii' },
  { jsxProperty: 'borderRight' },
  { jsxProperty: 'borderRightWidth', scope: 'borderWidths' },
  { jsxProperty: 'borderRightStyle' },
  { jsxProperty: 'borderRightColor', scope: 'colors' },
  { jsxProperty: 'borderBottom' },
  { jsxProperty: 'borderBottomWidth', scope: 'borderWidths' },
  { jsxProperty: 'borderBottomStyle' },
  { jsxProperty: 'borderBottomColor', scope: 'colors' },
  { jsxProperty: 'borderBottomLeftRadius', scope: 'radii' },
  { jsxProperty: 'borderBottomRightRadius', scope: 'radii' },
  { jsxProperty: 'borderLeft' },
  { jsxProperty: 'borderLeftWidth', scope: 'borderWidths' },
  { jsxProperty: 'borderLeftStyle' },
  { jsxProperty: 'borderLeftColor', scope: 'colors' },
]

export const border = compose(borderConfig)
