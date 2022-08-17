import type { CSSObject } from 'styled-components'
import type { Theme, ThemeKeys } from '../theme'
import type { Config, ThemeProp, SystemProps, ObjectPropsKey } from '../types'

const get = (key: string, theme: Theme, scope: ThemeKeys): string => {
  return theme?.[scope]?.[key] || key
}

const createMediaQuery = (breakpoint: string) => `@media(min-width: ${breakpoint})`

const parse = (
  cssProperties: string[],
  jsxProperty: string,
  value: string,
  theme: Theme,
  scope: ThemeKeys
) => {
  const styles: CSSObject = {}
  const result = get(value, theme, scope)

  if (cssProperties) {
    cssProperties.forEach(cssProp => {
      styles[cssProp] = result
    })
  } else {
    styles[jsxProperty] = result
  }

  return styles
}

const isJsxToStyledProp = (prop: string) => prop.startsWith('$')

export const getStyles = (configs: Config[], props: SystemProps & ThemeProp) => {
  let styles: CSSObject = {}

  for (const key in props) {
    if (!isJsxToStyledProp(key)) continue

    const value = props[key as keyof SystemProps]
    if (!value) continue

    const config = configs.find(config => config.jsxProperty === key)
    if (!config) continue

    const { scope, cssProperties, jsxProperty } = config
    const { theme } = props

    const formattedJsxProperty = jsxProperty.substring(1)

    if (typeof value === 'string') {
      styles = {
        ...styles,
        ...parse(cssProperties, formattedJsxProperty, value, theme, scope),
      }
    }

    if (typeof value === 'object') {
      const states = Object.keys(theme?.states || {})
      const breakpoints = Object.keys(theme?.breakpoints || {})

      Object.keys(value).forEach(key => {
        const v = value[key as ObjectPropsKey] as string

        if (key === '_') {
          styles = {
            ...styles,
            ...parse(cssProperties, formattedJsxProperty, v, theme, scope),
          }
        }

        if (states.includes(key)) {
          const state = theme.states[key]

          styles[state] = {
            ...(styles[state] as CSSObject),
            ...parse(cssProperties, formattedJsxProperty, v, theme, scope),
          }
        }

        if (breakpoints.includes(key)) {
          const breakpoint = createMediaQuery(theme.breakpoints[key])

          styles[breakpoint] = {
            ...(styles[breakpoint] as CSSObject),
            ...parse(cssProperties, formattedJsxProperty, v, theme, scope),
          }
        }
      })
    }
  }

  return styles
}

export const compose =
  (...configs: Config[][]) =>
  (props: SystemProps & ThemeProp) => {
    const config: Config[] = []

    configs.forEach(conf => config.push(...conf))

    return getStyles(config, props)
  }
