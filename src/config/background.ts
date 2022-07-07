import type * as CSS from 'csstype'

import type { Props, Config } from '../types'
import { compose } from '../utils'

export type BackgroundProps = Props<{
  background: CSS.Property.Background
  backgroundImage: CSS.Property.BackgroundImage
  backgroundSize: CSS.Property.BackgroundSize
  backgroundPosition: CSS.Property.BackgroundPosition
  backgroundRepeat: CSS.Property.BackgroundRepeat
}>

export const backgroundConfig: Config[] = [
  { jsxProperty: 'background' },
  { jsxProperty: 'backgroundImage' },
  { jsxProperty: 'backgroundSize' },
  { jsxProperty: 'backgroundPosition' },
  { jsxProperty: 'backgroundRepeat' },
]

export const background = compose(backgroundConfig)
