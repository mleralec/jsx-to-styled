import type * as CSS from 'csstype'

import type { Theme } from '../theme'
import { get } from '../utils'

export type LayoutProps = Partial<{
  w: keyof Theme['sizes'] | CSS.Property.Width
  h: keyof Theme['sizes'] | CSS.Property.Height
  minW: keyof Theme['sizes'] | CSS.Property.MinWidth
  maxW: keyof Theme['sizes'] | CSS.Property.MaxWidth
  minH: keyof Theme['sizes'] | CSS.Property.MinHeight
  maxH: keyof Theme['sizes'] | CSS.Property.MaxHeight
  display: CSS.Property.Display
  verticalAlign: CSS.Property.VerticalAlign
  overflow: CSS.Property.Overflow
  overflowX: CSS.Property.OverflowX
  overflowY: CSS.Property.OverflowY
}>

export const layout = (props: LayoutProps & { theme?: Theme }) => {
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
