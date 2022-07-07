import type * as CSS from 'csstype'

import type { Config, ObjectProps, Props, ThemeValues } from '../types'
import { compose } from '../utils'

export type PositionProps = Props<{
  position: ObjectProps<CSS.Property.Position>
  zIndex: ObjectProps<CSS.Property.ZIndex>
  top: ObjectProps<ThemeValues<'spaces'> | CSS.Property.Top>
  right: ObjectProps<ThemeValues<'spaces'> | CSS.Property.Right>
  bottom: ObjectProps<ThemeValues<'spaces'> | CSS.Property.Bottom>
  left: ObjectProps<ThemeValues<'spaces'> | CSS.Property.Left>
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
