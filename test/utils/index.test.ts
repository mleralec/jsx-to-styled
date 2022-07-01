import { describe, it, expect } from 'vitest'

import type { Theme } from '../../src/theme'
import { get } from '../../src/utils'

const theme: Theme = {
  colors: {
    'primary.500': 'tomato',
  },
}

describe('get', () => {
  it('should get value', () => {
    expect(get('primary.500', theme, 'colors')).toBe(theme.colors?.['primary.500'])
  })

  it('should fallback with unknown value', () => {
    expect(get('secondary.500', theme, 'colors')).toBe('secondary.500')
  })

  it('should fallback with bad scope', () => {
    expect(get('secondary.500', theme, 'spaces')).toBe('secondary.500')
  })
})
