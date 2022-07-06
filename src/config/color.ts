import type * as CSS from 'csstype'
import type { CSSObject } from 'styled-components'

import type { Props, ThemeProp, ThemeValues } from '../types'
import { get } from '../utils'

export type ColorProps = Props<{
  color: ThemeValues<'colors'> | CSS.Property.Color
  backgroundColor: ThemeValues<'colors'> | CSS.Property.BackgroundColor
  opacity: CSS.Property.Opacity
}>

export const color = (props: ColorProps & ThemeProp): CSSObject => {
  return {
    color: get(props.color, props.theme, 'colors'),
    backgroundColor: get(props.backgroundColor, props.theme, 'colors'),
    opacity: props.opacity,
  }
}
