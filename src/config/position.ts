import type * as CSS from 'csstype'
import type { CSSObject } from 'styled-components'

import type { Theme } from '../theme'
import { get } from '../utils'

export type PositionProps = Partial<{
  position: CSS.Property.Position
  zIndex: CSS.Property.ZIndex
  top: keyof Theme['spaces'] | Exclude<CSS.Property.Top, number>
  right: keyof Theme['spaces'] | Exclude<CSS.Property.Right, number>
  bottom: keyof Theme['spaces'] | Exclude<CSS.Property.Bottom, number>
  left: keyof Theme['spaces'] | Exclude<CSS.Property.Left, number>
}>

export const position = (props: PositionProps & { theme?: Theme }): CSSObject => {
  return {
    position: props.position,
    zIndex: props.zIndex,
    top: get(props.top, props.theme, 'spaces'),
    right: get(props.right, props.theme, 'spaces'),
    bottom: get(props.bottom, props.theme, 'spaces'),
    left: get(props.left, props.theme, 'spaces'),
  }
}
