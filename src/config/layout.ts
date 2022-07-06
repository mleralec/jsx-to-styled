import type * as CSS from 'csstype'

import type { Config, Props, ThemeProp, ThemeValues } from '../types'
import { getStyles } from '../utils'

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

const config: Config[] = [
  { property: 'w', scope: 'sizes' },
  { property: 'h', scope: 'sizes' },
  { property: 'minW', scope: 'sizes' },
  { property: 'maxW', scope: 'sizes' },
  { property: 'minH', scope: 'sizes' },
  { property: 'maxH', scope: 'sizes' },
  { property: 'display' },
  { property: 'verticalAlign' },
  { property: 'overflow' },
  { property: 'overflowX' },
  { property: 'overflowY' },
]

export const layout = (props: LayoutProps & ThemeProp) => {
  return getStyles(config, props)
}
