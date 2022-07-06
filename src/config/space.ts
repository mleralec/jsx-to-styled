import type * as CSS from 'csstype'

import type { Config, Props, ThemeProp, ThemeValues } from '../types'
import { getStyles } from '../utils'

export type SpaceProps = Props<{
  m: ThemeValues<'spaces'> | CSS.Property.Margin
  mt: ThemeValues<'spaces'> | CSS.Property.MarginTop
  mr: ThemeValues<'spaces'> | CSS.Property.MarginRight
  mb: ThemeValues<'spaces'> | CSS.Property.MarginBottom
  ml: ThemeValues<'spaces'> | CSS.Property.MarginLeft
  my: ThemeValues<'spaces'> | CSS.Property.Margin
  mx: ThemeValues<'spaces'> | CSS.Property.Margin
  p: ThemeValues<'spaces'> | CSS.Property.Padding
  pt: ThemeValues<'spaces'> | CSS.Property.PaddingTop
  pr: ThemeValues<'spaces'> | CSS.Property.PaddingRight
  pb: ThemeValues<'spaces'> | CSS.Property.PaddingBottom
  pl: ThemeValues<'spaces'> | CSS.Property.PaddingLeft
  py: ThemeValues<'spaces'> | CSS.Property.Padding
  px: ThemeValues<'spaces'> | CSS.Property.Padding
}>

const config: Config[] = [
  { property: 'm', scope: 'spaces' },
  { property: 'mt', scope: 'spaces' },
  { property: 'mr', scope: 'spaces' },
  { property: 'mb', scope: 'spaces' },
  { property: 'ml', scope: 'spaces' },
  { property: 'my', scope: 'spaces' },
  { property: 'mx', scope: 'spaces' },
  { property: 'p', scope: 'spaces' },
  { property: 'pt', scope: 'spaces' },
  { property: 'pr', scope: 'spaces' },
  { property: 'pb', scope: 'spaces' },
  { property: 'pl', scope: 'spaces' },
  { property: 'py', scope: 'spaces' },
  { property: 'px', scope: 'spaces' },
]

export const space = (props: SpaceProps & ThemeProp) => {
  return getStyles(config, props)
}
