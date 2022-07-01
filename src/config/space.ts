import type * as CSS from 'csstype'
import type { CSSObject } from 'styled-components'

import type { Props, ThemeProp } from '../types'
import type { Theme } from '../theme'
import { get } from '../utils'

export type SpaceProps = Props<{
  m: keyof Theme['spaces'] | CSS.Property.Margin
  mt: keyof Theme['spaces'] | CSS.Property.MarginTop
  mr: keyof Theme['spaces'] | CSS.Property.MarginRight
  mb: keyof Theme['spaces'] | CSS.Property.MarginBottom
  ml: keyof Theme['spaces'] | CSS.Property.MarginLeft
  my: keyof Theme['spaces'] | CSS.Property.Margin
  mx: keyof Theme['spaces'] | CSS.Property.Margin
  p: keyof Theme['spaces'] | CSS.Property.Padding
  pt: keyof Theme['spaces'] | CSS.Property.PaddingTop
  pr: keyof Theme['spaces'] | CSS.Property.PaddingRight
  pb: keyof Theme['spaces'] | CSS.Property.PaddingBottom
  pl: keyof Theme['spaces'] | CSS.Property.PaddingLeft
  py: keyof Theme['spaces'] | CSS.Property.Padding
  px: keyof Theme['spaces'] | CSS.Property.Padding
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
