import type * as CSS from 'csstype'

import type { Config, Props } from '../types'
import { compose } from '../utils'

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

export const flexConfig: Config[] = [
  { jsxProperty: 'alignItems' },
  { jsxProperty: 'alignContent' },
  { jsxProperty: 'justifyItems' },
  { jsxProperty: 'justifyContent' },
  { jsxProperty: 'flex' },
  { jsxProperty: 'flexBasis' },
  { jsxProperty: 'flexDirection' },
  { jsxProperty: 'flexGrow' },
  { jsxProperty: 'flexShrink' },
  { jsxProperty: 'flexWrap' },
  { jsxProperty: 'justifySelf' },
  { jsxProperty: 'alignSelf' },
  { jsxProperty: 'order' },
]

export const flex = compose(flexConfig)
