import type { CSSObject } from 'styled-components'

import {
  background,
  border,
  color,
  flex,
  grid,
  layout,
  position,
  space,
  typography,
} from './config'
import type {
  BackgroundProps,
  BorderProps,
  ColorProps,
  FlexProps,
  GridProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
  TypographyProps,
} from './config'
import type { ThemeProp } from './types'

export type SystemProps = BackgroundProps &
  BorderProps &
  ColorProps &
  FlexProps &
  GridProps &
  LayoutProps &
  PositionProps &
  SpaceProps &
  TypographyProps

export const system = (props: SystemProps & ThemeProp): CSSObject => ({
  ...background(props),
  ...border(props),
  ...color(props),
  ...flex(props),
  ...grid(props),
  ...layout(props),
  ...position(props),
  ...space(props),
  ...typography(props),
})
