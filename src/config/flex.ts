import type * as CSS from 'csstype'
import type { CSSObject } from 'styled-components'

import type { Props, ThemeProp } from '../types'

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

export const flex = (props: FlexProps & ThemeProp): CSSObject => {
  return {
    alignItems: props.alignItems,
    alignContent: props.alignContent,
    justifyItems: props.justifyItems,
    justifyContent: props.justifyContent,
    flexWrap: props.flexWrap,
    flexDirection: props.flexDirection,
    flex: props.flex,
    flexGrow: props.flexGrow,
    flexShrink: props.flexShrink,
    flexBasis: props.flexBasis,
    justifySelf: props.justifySelf,
    alignSelf: props.alignSelf,
    order: props.order,
  }
}
