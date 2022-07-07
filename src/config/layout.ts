import type * as CSS from 'csstype'

import type { Config, Props, ThemeValues, ObjectProps } from '../types'
import { compose } from '../utils'

export type LayoutProps = Props<{
  $w: ObjectProps<ThemeValues<'sizes'> | CSS.Property.Width>
  $h: ObjectProps<ThemeValues<'sizes'> | CSS.Property.Height>
  $minW: ObjectProps<ThemeValues<'sizes'> | CSS.Property.MinWidth>
  $maxW: ObjectProps<ThemeValues<'sizes'> | CSS.Property.MaxWidth>
  $minH: ObjectProps<ThemeValues<'sizes'> | CSS.Property.MinHeight>
  $maxH: ObjectProps<ThemeValues<'sizes'> | CSS.Property.MaxHeight>
  $display: ObjectProps<CSS.Property.Display>
  $verticalAlign: ObjectProps<CSS.Property.VerticalAlign>
  $overflow: ObjectProps<CSS.Property.Overflow>
  $overflowX: ObjectProps<CSS.Property.OverflowX>
  $overflowY: ObjectProps<CSS.Property.OverflowY>
}>

export const layoutConfig: Config[] = [
  { jsxProperty: '$w', scope: 'sizes', cssProperties: ['width'] },
  { jsxProperty: '$h', scope: 'sizes', cssProperties: ['height'] },
  { jsxProperty: '$minW', scope: 'sizes', cssProperties: ['minWidth'] },
  { jsxProperty: '$maxW', scope: 'sizes', cssProperties: ['maxWidth'] },
  { jsxProperty: '$minH', scope: 'sizes', cssProperties: ['minHeight'] },
  { jsxProperty: '$maxH', scope: 'sizes', cssProperties: ['maxHeight'] },
  { jsxProperty: '$display' },
  { jsxProperty: '$verticalAlign' },
  { jsxProperty: '$overflow' },
  { jsxProperty: '$overflowX' },
  { jsxProperty: '$overflowY' },
]

export const layout = compose(layoutConfig)
