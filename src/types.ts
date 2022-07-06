import type { Theme, ThemeKeys } from './theme'

type ExcludeNumbers<T> = {
  [Key in keyof T]: Exclude<T[Key], number | symbol>
}

export type Props<P> = Partial<ExcludeNumbers<P>>

export type ThemeProp = Partial<{ theme: Theme }>

export type ThemeValues<Key extends ThemeKeys> = keyof Theme[Key]
