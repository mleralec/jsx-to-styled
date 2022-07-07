import { describe, it, expect } from 'vitest'

import { space } from '../src'

const theme = {
  spaces: {
    sm: '10px',
    md: '20px',
  },
}

describe('space', () => {
  it('should return margin-top + margin-bottom with "my"', () => {
    const props = { $my: '20px' }

    expect(space(props)).toEqual({ marginTop: '20px', marginBottom: '20px' })
  })

  it('should return margin-top + margin-bottom with "my" from theme', () => {
    const props = { $my: 'md', theme }

    expect(space(props)).toEqual({ marginTop: '20px', marginBottom: '20px' })
  })

  it('should return margin-right + margin-left with "mx"', () => {
    const props = { $mx: '20px' }

    expect(space(props)).toEqual({ marginRight: '20px', marginLeft: '20px' })
  })

  it('should return margin-right + margin-left with "mx" from theme', () => {
    const props = { $mx: 'md', theme }

    expect(space(props)).toEqual({ marginRight: '20px', marginLeft: '20px' })
  })

  it('should return padding-top + padding-bottom with "my"', () => {
    const props = { $py: '20px' }

    expect(space(props)).toEqual({ paddingTop: '20px', paddingBottom: '20px' })
  })

  it('should return padding-top + padding-bottom with "my" from theme', () => {
    const props = { $py: 'md', theme }

    expect(space(props)).toEqual({ paddingTop: '20px', paddingBottom: '20px' })
  })

  it('should return padding-right + padding-left with "mx"', () => {
    const props = { $px: '20px' }

    expect(space(props)).toEqual({ paddingRight: '20px', paddingLeft: '20px' })
  })

  it('should return padding-right + padding-left with "mx" from theme', () => {
    const props = { $px: 'md', theme }

    expect(space(props)).toEqual({ paddingRight: '20px', paddingLeft: '20px' })
  })
})
