import { describe, it, expect, beforeEach } from 'vitest'

import { getStyles } from '../../src/utils'
import type { Config } from '../../src/types'

const theme = {
  colors: {
    primary: 'tomato',
  },
}

const defaultProps = { color: 'primary', theme }
const defaultConfig: Config[] = [{ property: 'color', scope: 'colors' }]

let props = {}
let config: Config[] = []

beforeEach(() => {
  props = { ...defaultProps }
  config = [...defaultConfig]
})

describe('getStyles', () => {
  it('should get theme value', () => {
    expect(getStyles(config, props)).toEqual({ color: 'tomato' })
  })

  it('should fallback with unknown value', () => {
    props = { ...props, color: 'secondary' }
    expect(getStyles(config, props)).toEqual({ color: 'secondary' })
  })

  it('should fallback with bad scope', () => {
    config = [{ property: 'color', scope: 'spaces' }]
    expect(getStyles(config, props)).toEqual({ color: 'primary' })
  })

  it('should fallback without scope', () => {
    config = [{ property: 'color' }]
    expect(getStyles(config, props)).toEqual({ color: 'primary' })
  })
})
