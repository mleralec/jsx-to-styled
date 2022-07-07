import type { Theme, ThemeKeys } from './theme'
import type {
  BackgroundProps,
  BorderProps,
  ColorProps,
  FlexProps,
  GridProps,
  LayoutProps,
  OtherProps,
  PositionProps,
  SpaceProps,
  TypographyProps,
} from './config'

type ExcludeNumbers<T> = {
  [Key in keyof T]: Exclude<T[Key], number | symbol>
}

type ObjectPropsThemeKey<T> = T extends {
  breakpoints: Record<never, never>
  states: Record<never, never>
}
  ? keyof T['breakpoints'] | keyof T['states']
  : T extends { breakpoints: Record<never, never> }
  ? keyof T['breakpoints']
  : T extends { states: Record<never, never> }
  ? keyof T['states']
  : never

export type ObjectPropsKey = '_' | ObjectPropsThemeKey<Theme>
export type ObjectProps<P> = P | Partial<Record<ObjectPropsKey, P>>

export type Props<P> = Partial<ExcludeNumbers<P>>

export type ThemeProp = Partial<{ theme: Theme }>

export type ThemeValues<Key extends ThemeKeys> = keyof Theme[Key]

export type Config = {
  jsxProperty: keyof SystemProps
  scope?: ThemeKeys
  cssProperties?: string[]
}

export type SystemProps = BackgroundProps &
  BorderProps &
  ColorProps &
  FlexProps &
  GridProps &
  LayoutProps &
  PositionProps &
  SpaceProps &
  TypographyProps &
  OtherProps
