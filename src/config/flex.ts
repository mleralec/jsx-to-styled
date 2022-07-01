import type * as CSS from 'csstype'

export type FlexProps = Partial<{
  alignItems: CSS.Property.AlignItems
  alignContent: CSS.Property.AlignContent
  justifyItems: CSS.Property.JustifyItems
  justifyContent: CSS.Property.JustifyContent
  flexWrap: CSS.Property.FlexWrap
  flexDirection: CSS.Property.FlexDirection
  flex: CSS.Property.Flex
  flexGrow: CSS.Property.FlexGrow
  flexShrink: CSS.Property.FlexShrink
  flexBasis: CSS.Property.FlexBasis
  justifySelf: CSS.Property.JustifySelf
  alignSelf: CSS.Property.AlignSelf
  order: CSS.Property.Order
}>

export const flex = (props: FlexProps) => {
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
