import type * as CSS from 'csstype'
import type { CSSObject } from 'styled-components'

import type { Props, ThemeProp } from '../types'

export type OtherProps = Props<{
  cursor: CSS.Property.Cursor
  float: CSS.Property.Float
  objectFit: CSS.Property.ObjectFit
  objectPosition: CSS.Property.ObjectPosition
  transform: CSS.Property.Transform
  visibility: CSS.Property.Visibility
}>

export const layout = (props: OtherProps & ThemeProp): CSSObject => {
  return {
    cursor: props.cursor,
    float: props.float,
    objectFit: props.objectFit,
    objectPosition: props.objectPosition,
    transform: props.transform,
    visibility: props.visibility,
  }
}
