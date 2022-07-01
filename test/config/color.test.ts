import { describe, it, expect } from 'vitest'

import { color } from '../../src'
import type { Theme } from '../../src/theme'

const props = {
  color: undefined,
  backgroundColor: undefined,
  opacity: undefined,
}

describe('color', () => {
  it('return undefined', () => {
    expect(color(props)).toEqual(props)
  })

  it('return tomato color', () => {
    const p = { ...props, color: 'tomato' }
    expect(color(p)).toEqual(p)
  })

  it('return primary.500 key without theme', () => {
    const p = { ...props, color: 'primary.500' }
    expect(color(p)).toEqual(p)
  })

  it('return primary.500 value with theme', () => {
    const theme: Theme = {
      colors: {
        'primary.500': 'tomato',
      },
    }
    expect(color({ ...props, color: 'primary.500', theme })).toEqual({ ...props, color: 'tomato' })
  })
})
