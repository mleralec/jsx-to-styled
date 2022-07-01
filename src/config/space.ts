import type * as CSS from 'csstype'
import type { CSSObject } from 'styled-components'

import type { Theme } from '../theme'
import { get } from '../utils'

export type SpaceProps = Partial<{
  m: keyof Theme['spaces'] | Exclude<CSS.Property.Margin, number>
  mt: keyof Theme['spaces'] | Exclude<CSS.Property.MarginTop, number>
  mr: keyof Theme['spaces'] | Exclude<CSS.Property.MarginRight, number>
  mb: keyof Theme['spaces'] | Exclude<CSS.Property.MarginBottom, number>
  ml: keyof Theme['spaces'] | Exclude<CSS.Property.MarginLeft, number>
  my: keyof Theme['spaces'] | Exclude<CSS.Property.Margin, number>
  mx: keyof Theme['spaces'] | Exclude<CSS.Property.Margin, number>
  p: keyof Theme['spaces'] | Exclude<CSS.Property.Padding, number>
  pt: keyof Theme['spaces'] | Exclude<CSS.Property.PaddingTop, number>
  pr: keyof Theme['spaces'] | Exclude<CSS.Property.PaddingRight, number>
  pb: keyof Theme['spaces'] | Exclude<CSS.Property.PaddingBottom, number>
  pl: keyof Theme['spaces'] | Exclude<CSS.Property.PaddingLeft, number>
  py: keyof Theme['spaces'] | Exclude<CSS.Property.Padding, number>
  px: keyof Theme['spaces'] | Exclude<CSS.Property.Padding, number>
}>

export const space = (props: SpaceProps & { theme?: Theme }): CSSObject => {
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
