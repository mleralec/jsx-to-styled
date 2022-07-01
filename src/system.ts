import type { CSSObject } from 'styled-components'

import { background, color, flex, grid, layout, position, space, typography } from './config'
import type {
  BackgroundProps,
  ColorProps,
  FlexProps,
  GridProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
  TypographyProps,
} from './config'
import type { Theme } from './theme'

export type SystemProps = BackgroundProps &
  ColorProps &
  FlexProps &
  GridProps &
  LayoutProps &
  PositionProps &
  SpaceProps &
  TypographyProps

export const system = (props: SystemProps & { theme?: Theme }): CSSObject => ({
  ...background(props),
  ...color(props),
  ...flex(props),
  ...grid(props),
  ...layout(props),
  ...position(props),
  ...space(props),
  ...typography(props),
})
