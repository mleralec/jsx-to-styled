import type * as CSS from 'csstype'
import type { CSSObject } from 'styled-components'

import type { Props, ThemeProp, ThemeValues } from '../types'
import { get } from '../utils'

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

export const space = (props: SpaceProps & ThemeProp): CSSObject => {
  return {
    margin: get(props.m, props.theme, 'spaces'),
    marginTop: get(props.mt || props.my, props.theme, 'spaces'),
    marginRight: get(props.mr || props.mx, props.theme, 'spaces'),
    marginBottom: get(props.mb || props.mb, props.theme, 'spaces'),
    marginLeft: get(props.ml || props.mx, props.theme, 'spaces'),
    padding: get(props.p, props.theme, 'spaces'),
    paddingTop: get(props.pt || props.py, props.theme, 'spaces'),
    paddingRight: get(props.pr || props.px, props.theme, 'spaces'),
    paddingBottom: get(props.pb || props.pb, props.theme, 'spaces'),
    paddingLeft: get(props.pl || props.px, props.theme, 'spaces'),
  }
}
