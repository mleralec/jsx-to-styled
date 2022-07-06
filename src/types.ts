import type { Theme, ThemeKeys } from './theme'
import type { SystemProps } from './system'

type ExcludeNumbers<T> = {
  [Key in keyof T]: Exclude<T[Key], number | symbol>
}

export type Props<P> = Partial<ExcludeNumbers<P>>

export type ThemeProp = Partial<{ theme: Theme }>

export type ThemeValues<Key extends ThemeKeys> = keyof Theme[Key]

export type Config = {
  property: keyof SystemProps
  scope?: ThemeKeys
}
