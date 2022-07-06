import type * as CSS from 'csstype'

import type { Props, Config, ThemeProp } from '../types'
import { getStyles } from '../utils'

export type BackgroundProps = Props<{
  background: CSS.Property.Background
  backgroundImage: CSS.Property.BackgroundImage
  backgroundSize: CSS.Property.BackgroundSize
  backgroundPosition: CSS.Property.BackgroundPosition
  backgroundRepeat: CSS.Property.BackgroundRepeat
}>

const config: Config[] = [
  { property: 'background' },
  { property: 'backgroundImage' },
  { property: 'backgroundSize' },
  { property: 'backgroundPosition' },
  { property: 'backgroundRepeat' },
]

export const background = (props: BackgroundProps & ThemeProp) => {
  return getStyles(config, props)
}
