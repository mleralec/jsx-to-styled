import type * as CSS from 'csstype'
import type { CSSObject } from 'styled-components'

import type { Props, ThemeProp, ThemeValues } from '../types'
import { get } from '../utils'

export type LayoutProps = Props<{
  w: ThemeValues<'sizes'> | CSS.Property.Width
  h: ThemeValues<'sizes'> | CSS.Property.Height
  minW: ThemeValues<'sizes'> | CSS.Property.MinWidth
  maxW: ThemeValues<'sizes'> | CSS.Property.MaxWidth
  minH: ThemeValues<'sizes'> | CSS.Property.MinHeight
  maxH: ThemeValues<'sizes'> | CSS.Property.MaxHeight
  display: CSS.Property.Display
  verticalAlign: CSS.Property.VerticalAlign
  overflow: CSS.Property.Overflow
  overflowX: CSS.Property.OverflowX
  overflowY: CSS.Property.OverflowY
}>

export const layout = (props: LayoutProps & ThemeProp): CSSObject => {
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
