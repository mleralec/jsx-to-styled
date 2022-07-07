import type * as CSS from 'csstype'

import type { Config, Props, ThemeValues } from '../types'
import { compose } from '../utils'

export type ColorProps = Props<{
  color: ThemeValues<'colors'> | CSS.Property.Color
  backgroundColor: ThemeValues<'colors'> | CSS.Property.BackgroundColor
  opacity: CSS.Property.Opacity
}>

export const colorConfig: Config[] = [
  { jsxProperty: 'color', scope: 'colors' },
  { jsxProperty: 'backgroundColor', scope: 'colors' },
  { jsxProperty: 'opacity' },
]

export const color = compose(colorConfig)
