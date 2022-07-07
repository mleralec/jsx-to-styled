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

type ObjectPropsKey = keyof Theme['states'] | keyof Theme['breakpoints'] | '_'

type ObjectProps<T> = {
  [Key in keyof T]: {
    [key: ObjectPropsKey]: ExcludeNumbers<T[Key]>
  }
}

export type Props<P> = Partial<ExcludeNumbers<P> | ObjectProps<P>>

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
