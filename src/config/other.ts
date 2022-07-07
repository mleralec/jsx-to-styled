import type * as CSS from 'csstype'

import type { Config, Props, ObjectProps } from '../types'
import { compose } from '../utils'

export type OtherProps = Props<{
  $cursor: ObjectProps<CSS.Property.Cursor>
  $float: ObjectProps<CSS.Property.Float>
  $objectFit: ObjectProps<CSS.Property.ObjectFit>
  $objectPosition: ObjectProps<CSS.Property.ObjectPosition>
  $transform: ObjectProps<CSS.Property.Transform>
  $visibility: ObjectProps<CSS.Property.Visibility>
}>

export const otherConfig: Config[] = [
  { jsxProperty: '$cursor' },
  { jsxProperty: '$float' },
  { jsxProperty: '$objectFit' },
  { jsxProperty: '$objectPosition' },
  { jsxProperty: '$transform' },
  { jsxProperty: '$visibility' },
]

export const other = compose(otherConfig)
