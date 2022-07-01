import type { Theme, ThemeKeys } from '../theme'

export const get = (
  key: string | number | undefined,
  theme: Theme,
  scope: ThemeKeys
): string | number | undefined => {
  return theme?.[scope]?.[key as string] || key
}
