import type { Theme, ThemeKeys } from '../theme'

export const get = (key: string, theme: Theme, scope: ThemeKeys): string => {
  return theme?.[scope]?.[key as string] || key
}
