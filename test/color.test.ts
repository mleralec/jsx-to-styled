import { describe, it, expect } from 'vitest'

import { color } from '../src'

const props = {
  $color: undefined,
  $backgroundColor: undefined,
  $opacity: undefined,
}

describe('color', () => {
  it('return undefined', () => {
    expect(color(props)).toEqual({})
  })

  it('return tomato color', () => {
    const p = { ...props, $color: 'tomato' }
    expect(color(p)).toEqual({ color: 'tomato' })
  })

  it('return primary.500 key without theme', () => {
    const p = { ...props, $color: 'primary.500' }
    expect(color(p)).toEqual({ color: 'primary.500' })
  })

  it('return primary.500 value with theme', () => {
    const theme = {
      colors: {
        'primary.500': 'tomato',
      },
    }
    expect(color({ ...props, $color: 'primary.500', theme })).toEqual({ color: 'tomato' })
  })
})
