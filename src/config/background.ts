import type * as CSS from 'csstype'

import type { Props, Config, ObjectProps } from '../types'
import { compose } from '../utils'

export type BackgroundProps = Props<{
  background: ObjectProps<CSS.Property.Background>
  backgroundImage: ObjectProps<CSS.Property.BackgroundImage>
  backgroundSize: ObjectProps<CSS.Property.BackgroundSize>
  backgroundPosition: ObjectProps<CSS.Property.BackgroundPosition>
  backgroundRepeat: ObjectProps<CSS.Property.BackgroundRepeat>
}>

export const backgroundConfig: Config[] = [
  { jsxProperty: 'background' },
  { jsxProperty: 'backgroundImage' },
  { jsxProperty: 'backgroundSize' },
  { jsxProperty: 'backgroundPosition' },
  { jsxProperty: 'backgroundRepeat' },
]

export const background = compose(backgroundConfig)
