import type { CSSObject } from 'styled-components'
import type { Theme, ThemeKeys } from '../theme'
import type { Config, ThemeProp, SystemProps, ObjectPropsKey } from '../types'

const get = (key: string, theme: Theme, scope: ThemeKeys): string => {
  return theme?.[scope]?.[key] || key
}

// const createMediaQuery = (breakpoint: string) => `@media(min-width: ${breakpoint})`

export const getStyles = (config: Config[], props: SystemProps & ThemeProp) => {
  const styles: CSSObject = {}

  config.forEach(({ jsxProperty, scope, cssProperties }) => {
    const value = props[jsxProperty]
    const { theme } = props

    if (!value) return

    if (typeof value === 'string') {
      if (cssProperties) {
        cssProperties.forEach(cssProp => {
          styles[cssProp] = get(value, theme, scope)
        })
      } else {
        styles[jsxProperty as string] = get(value, theme, scope)
      }
    }

    if (typeof value === 'object') {
      const states = Object.keys(theme?.states || {})
      const breakpoints = Object.keys(theme?.breakpoints || {})

      Object.keys(value).forEach(key => {
        const v = value[key as ObjectPropsKey] as string

        if (key === '_') {
          if (cssProperties) {
            cssProperties.forEach(cssProp => {
              styles[cssProp] = get(v, theme, scope)
            })
          } else {
            styles[jsxProperty as string] = get(v, theme, scope)
          }
        }

        if (states.includes(key)) {
          const state = theme.states[key]
          const s: CSSObject = {}

          if (cssProperties) {
            cssProperties.forEach(cssProp => {
              s[cssProp] = get(v, props.theme, scope)
            })
          } else {
            s[jsxProperty as string] = get(v, props.theme, scope)
          }

          styles[state] = { ...(styles[state] as CSSObject), ...s }
        }

        if (breakpoints.includes(key)) {
          // todo apply breakpoints styles
          // styles[createMediaQuery(breakpoint)] = get(v, props.theme, scope)
        }
      })
    }
  })

  return styles
}

export const compose =
  (...configs: Config[][]) =>
  (props: SystemProps & ThemeProp) => {
    const config: Config[] = []

    configs.forEach(conf => config.push(...conf))

    return getStyles(config, props)
  }
