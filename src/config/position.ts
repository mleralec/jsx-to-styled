import type * as CSS from 'csstype'

import type { Config, Props, ThemeProp, ThemeValues } from '../types'
import { getStyles } from '../utils'

export type PositionProps = Props<{
  position: CSS.Property.Position
  zIndex: CSS.Property.ZIndex
  top: ThemeValues<'spaces'> | CSS.Property.Top
  right: ThemeValues<'spaces'> | CSS.Property.Right
  bottom: ThemeValues<'spaces'> | CSS.Property.Bottom
  left: ThemeValues<'spaces'> | CSS.Property.Left
}>

const config: Config[] = [
  { property: 'position' },
  { property: 'zIndex' },
  { property: 'top', scope: 'spaces' },
  { property: 'right', scope: 'spaces' },
  { property: 'bottom', scope: 'spaces' },
  { property: 'left', scope: 'spaces' },
]

export const position = (props: PositionProps & ThemeProp) => {
  return getStyles(config, props)
}
