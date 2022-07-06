import type * as CSS from 'csstype'
import type { CSSObject } from 'styled-components'

import type { Props, ThemeProp, ThemeValues } from '../types'
import { get } from '../utils'

export type PositionProps = Props<{
  position: CSS.Property.Position
  zIndex: CSS.Property.ZIndex
  top: ThemeValues<'spaces'> | CSS.Property.Top
  right: ThemeValues<'spaces'> | CSS.Property.Right
  bottom: ThemeValues<'spaces'> | CSS.Property.Bottom
  left: ThemeValues<'spaces'> | CSS.Property.Left
}>

export const position = (props: PositionProps & ThemeProp): CSSObject => {
  return {
    position: props.position,
    zIndex: props.zIndex,
    top: get(props.top, props.theme, 'spaces'),
    right: get(props.right, props.theme, 'spaces'),
    bottom: get(props.bottom, props.theme, 'spaces'),
    left: get(props.left, props.theme, 'spaces'),
  }
}
