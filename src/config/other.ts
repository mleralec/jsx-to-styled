import type * as CSS from 'csstype'

import type { Config, Props, ThemeProp } from '../types'
import { getStyles } from '../utils'

export type OtherProps = Props<{
  cursor: CSS.Property.Cursor
  float: CSS.Property.Float
  objectFit: CSS.Property.ObjectFit
  objectPosition: CSS.Property.ObjectPosition
  transform: CSS.Property.Transform
  visibility: CSS.Property.Visibility
}>

const config: Config[] = [
  { property: 'cursor' },
  { property: 'float' },
  { property: 'objectFit' },
  { property: 'objectPosition' },
  { property: 'transform' },
  { property: 'visibility' },
]

export const other = (props: OtherProps & ThemeProp) => {
  return getStyles(config, props)
}
