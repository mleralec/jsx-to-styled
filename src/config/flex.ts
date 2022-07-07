import type * as CSS from 'csstype'

import type { Config, Props, ObjectProps } from '../types'
import { compose } from '../utils'

export type FlexProps = Props<{
  $alignItems: ObjectProps<CSS.Property.AlignItems>
  $alignContent: ObjectProps<CSS.Property.AlignContent>
  $justifyItems: ObjectProps<CSS.Property.JustifyItems>
  $justifyContent: ObjectProps<CSS.Property.JustifyContent>
  $flex: ObjectProps<CSS.Property.Flex>
  $flexBasis: ObjectProps<CSS.Property.FlexBasis>
  $flexDirection: ObjectProps<CSS.Property.FlexDirection>
  $flexGrow: ObjectProps<CSS.Property.FlexGrow>
  $flexShrink: ObjectProps<CSS.Property.FlexShrink>
  $flexWrap: ObjectProps<CSS.Property.FlexWrap>
  $justifySelf: ObjectProps<CSS.Property.JustifySelf>
  $alignSelf: ObjectProps<CSS.Property.AlignSelf>
  $order: ObjectProps<CSS.Property.Order>
}>

export const flexConfig: Config[] = [
  { jsxProperty: '$alignItems' },
  { jsxProperty: '$alignContent' },
  { jsxProperty: '$justifyItems' },
  { jsxProperty: '$justifyContent' },
  { jsxProperty: '$flex' },
  { jsxProperty: '$flexBasis' },
  { jsxProperty: '$flexDirection' },
  { jsxProperty: '$flexGrow' },
  { jsxProperty: '$flexShrink' },
  { jsxProperty: '$flexWrap' },
  { jsxProperty: '$justifySelf' },
  { jsxProperty: '$alignSelf' },
  { jsxProperty: '$order' },
]

export const flex = compose(flexConfig)
