import type * as CSS from 'csstype'

import type { Config, Props, ThemeValues } from '../types'
import { compose } from '../utils'

export type PositionProps = Props<{
  position: CSS.Property.Position
  zIndex: CSS.Property.ZIndex
  top: ThemeValues<'spaces'> | CSS.Property.Top
  right: ThemeValues<'spaces'> | CSS.Property.Right
  bottom: ThemeValues<'spaces'> | CSS.Property.Bottom
  left: ThemeValues<'spaces'> | CSS.Property.Left
}>

export const positionConfig: Config[] = [
  { jsxProperty: 'position' },
  { jsxProperty: 'zIndex' },
  { jsxProperty: 'top', scope: 'spaces' },
  { jsxProperty: 'right', scope: 'spaces' },
  { jsxProperty: 'bottom', scope: 'spaces' },
  { jsxProperty: 'left', scope: 'spaces' },
]

export const position = compose(positionConfig)
