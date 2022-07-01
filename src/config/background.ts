import type * as CSS from 'csstype'

export type BackgroundProps = Partial<{
  background: CSS.Property.Background
  backgroundImage: CSS.Property.BackgroundImage
  backgroundSize: CSS.Property.BackgroundSize
  backgroundPosition: CSS.Property.BackgroundPosition
  backgroundRepeat: CSS.Property.BackgroundRepeat
}>

export const background = (props: BackgroundProps) => {
  return {
    background: props.background,
    backgroundImage: props.backgroundImage,
    backgroundSize: props.backgroundSize,
    backgroundPosition: props.backgroundPosition,
    backgroundRepeat: props.backgroundRepeat,
  }
}
