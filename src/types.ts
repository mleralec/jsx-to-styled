import type { Theme } from './theme'

type ExcludeNumbers<T> = {
  [Key in keyof T]: Exclude<T[Key], number>
}

export type Props<P> = Partial<ExcludeNumbers<P>>

export type ThemeProp = Partial<{ theme: Theme }>
