import {
  backgroundConfig,
  borderConfig,
  colorConfig,
  flexConfig,
  gridConfig,
  layoutConfig,
  otherConfig,
  positionConfig,
  spaceConfig,
  typographyConfig,
} from './config'

import { compose } from './utils'

export const system = compose(
  backgroundConfig,
  borderConfig,
  colorConfig,
  flexConfig,
  gridConfig,
  layoutConfig,
  otherConfig,
  positionConfig,
  spaceConfig,
  typographyConfig
)
