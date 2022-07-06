import type { CSSObject } from 'styled-components'
import type { Theme, ThemeKeys } from '../theme'
import type { Config, ThemeProp } from '../types'
import type { SystemProps } from '../system'

const get = (key: string, theme: Theme, scope: ThemeKeys): string => {
  return theme?.[scope]?.[key] || key
}

// const createMediaQuery = (breakpoint: string) => `@media(min-width: ${breakpoint})`

export const getStyles = (config: Config[], props: SystemProps & ThemeProp) => {
  const styles: CSSObject = {}

  config.forEach(({ property, scope }) => {
    const value = props[property]

    if (!value) return

    if (typeof value === 'string') {
      styles[property as string] = get(value, props.theme, scope)
    }

    // if (typeof value === 'object') {
    //   const { breakpoints } = props.theme

    //   if (!breakpoints) return

    //   Object.keys(value).forEach(breakpoint => {
    //     const v = value[breakpoint]
    //     styles[createMediaQuery(breakpoint)] = get(v, props.theme, scope)
    //   })
    // }
  })

  return styles
}
