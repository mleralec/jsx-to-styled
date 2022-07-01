import type * as CSS from 'csstype'
import type { CSSObject } from 'styled-components'

import type { Theme } from '../theme'
import { get } from '../utils'

export type LayoutProps = Partial<{
  w: keyof Theme['sizes'] | Exclude<CSS.Property.Width, number>
  h: keyof Theme['sizes'] | Exclude<CSS.Property.Height, number>
  minW: keyof Theme['sizes'] | Exclude<CSS.Property.MinWidth, number>
  maxW: keyof Theme['sizes'] | Exclude<CSS.Property.MaxWidth, number>
  minH: keyof Theme['sizes'] | Exclude<CSS.Property.MinHeight, number>
  maxH: keyof Theme['sizes'] | Exclude<CSS.Property.MaxHeight, number>
  display: CSS.Property.Display
  verticalAlign: CSS.Property.VerticalAlign
  overflow: CSS.Property.Overflow
  overflowX: CSS.Property.OverflowX
  overflowY: CSS.Property.OverflowY
}>

export const layout = (props: LayoutProps & { theme?: Theme }): CSSObject => {
  return {
    width: get(props.w, props.theme, 'sizes'),
    height: get(props.h, props.theme, 'sizes'),
    minWidht: get(props.minW, props.theme, 'sizes'),
    maxWidth: get(props.maxW, props.theme, 'sizes'),
    minHeight: get(props.minH, props.theme, 'sizes'),
    maxHeight: get(props.maxH, props.theme, 'sizes'),
    display: props.display,
    verticalAlign: props.verticalAlign,
    overflow: props.overflow,
    overflowX: props.overflowX,
    overflowY: props.overflowY,
  }
}
