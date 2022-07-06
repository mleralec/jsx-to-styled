import type { Theme } from '../theme'

export const get = <T extends Theme>(key: string, theme: T, scope: keyof T): string => {
  return theme?.[scope]?.[key] || key
}
