import type * as CSS from 'csstype'

import type { Config, Props, ThemeProp } from '../types'
import { getStyles } from '../utils'

export type FlexProps = Props<{
  alignItems: CSS.Property.AlignItems
  alignContent: CSS.Property.AlignContent
  justifyItems: CSS.Property.JustifyItems
  justifyContent: CSS.Property.JustifyContent
  flex: CSS.Property.Flex
  flexBasis: CSS.Property.FlexBasis
  flexDirection: CSS.Property.FlexDirection
  flexGrow: CSS.Property.FlexGrow
  flexShrink: CSS.Property.FlexShrink
  flexWrap: CSS.Property.FlexWrap
  justifySelf: CSS.Property.JustifySelf
  alignSelf: CSS.Property.AlignSelf
  order: CSS.Property.Order
}>

const config: Config[] = [
  { property: 'alignItems' },
  { property: 'alignContent' },
  { property: 'justifyItems' },
  { property: 'justifyContent' },
  { property: 'flex' },
  { property: 'flexBasis' },
  { property: 'flexDirection' },
  { property: 'flexGrow' },
  { property: 'flexShrink' },
  { property: 'flexWrap' },
  { property: 'justifySelf' },
  { property: 'alignSelf' },
  { property: 'order' },
]

export const flex = (props: FlexProps & ThemeProp) => {
  return getStyles(config, props)
}
