import type * as CSS from 'csstype'
import type { CSSObject } from 'styled-components'

import type { Props, ThemeProp } from '../types'
import type { Theme } from '../theme'
import { get } from '../utils'

export type ColorProps = Props<{
  color: keyof Theme['colors'] | CSS.Property.Color
  backgroundColor: keyof Theme['colors'] | CSS.Property.BackgroundColor
  opacity: CSS.Property.Opacity
}>

export const color = (props: ColorProps & ThemeProp): CSSObject => {
  return {
    color: get(props.color, props.theme, 'colors'),
    backgroundColor: get(props.backgroundColor, props.theme, 'colors'),
    opacity: props.opacity,
  }
}
