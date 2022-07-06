import type * as CSS from 'csstype'

import type { Config, Props, ThemeProp, ThemeValues } from '../types'
import { getStyles } from '../utils'

export type ColorProps = Props<{
  color: ThemeValues<'colors'> | CSS.Property.Color
  backgroundColor: ThemeValues<'colors'> | CSS.Property.BackgroundColor
  opacity: CSS.Property.Opacity
}>

const config: Config[] = [
  { property: 'color', scope: 'colors' },
  { property: 'backgroundColor', scope: 'colors' },
  { property: 'opacity' },
]

export const color = (props: ColorProps & ThemeProp) => {
  return getStyles(config, props)
}
