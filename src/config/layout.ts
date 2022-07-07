import type * as CSS from 'csstype'

import type { Config, Props, ThemeValues } from '../types'
import { compose } from '../utils'

export type LayoutProps = Props<{
  w: ThemeValues<'sizes'> | CSS.Property.Width
  h: ThemeValues<'sizes'> | CSS.Property.Height
  minW: ThemeValues<'sizes'> | CSS.Property.MinWidth
  maxW: ThemeValues<'sizes'> | CSS.Property.MaxWidth
  minH: ThemeValues<'sizes'> | CSS.Property.MinHeight
  maxH: ThemeValues<'sizes'> | CSS.Property.MaxHeight
  display: CSS.Property.Display
  verticalAlign: CSS.Property.VerticalAlign
  overflow: CSS.Property.Overflow
  overflowX: CSS.Property.OverflowX
  overflowY: CSS.Property.OverflowY
}>

export const layoutConfig: Config[] = [
  { jsxProperty: 'w', scope: 'sizes', cssProperties: ['width'] },
  { jsxProperty: 'h', scope: 'sizes', cssProperties: ['height'] },
  { jsxProperty: 'minW', scope: 'sizes', cssProperties: ['minWidth'] },
  { jsxProperty: 'maxW', scope: 'sizes', cssProperties: ['maxWidth'] },
  { jsxProperty: 'minH', scope: 'sizes', cssProperties: ['minHeight'] },
  { jsxProperty: 'maxH', scope: 'sizes', cssProperties: ['maxHeight'] },
  { jsxProperty: 'display' },
  { jsxProperty: 'verticalAlign' },
  { jsxProperty: 'overflow' },
  { jsxProperty: 'overflowX' },
  { jsxProperty: 'overflowY' },
]

export const layout = compose(layoutConfig)
