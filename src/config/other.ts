import type * as CSS from 'csstype'

import type { Config, Props } from '../types'
import { compose } from '../utils'

export type OtherProps = Props<{
  cursor: CSS.Property.Cursor
  float: CSS.Property.Float
  objectFit: CSS.Property.ObjectFit
  objectPosition: CSS.Property.ObjectPosition
  transform: CSS.Property.Transform
  visibility: CSS.Property.Visibility
}>

export const otherConfig: Config[] = [
  { jsxProperty: 'cursor' },
  { jsxProperty: 'float' },
  { jsxProperty: 'objectFit' },
  { jsxProperty: 'objectPosition' },
  { jsxProperty: 'transform' },
  { jsxProperty: 'visibility' },
]

export const other = compose(otherConfig)
