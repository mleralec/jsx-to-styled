import { describe, it, expect } from 'vitest'

import system from '../src'

const theme = {
  colors: {
    primary: 'tomato',
    secondary: 'purple',
  },
  spaces: {
    sm: '10px',
    md: '20px',
  },
  breakpoints: {
    md: '1000px',
  },
  states: {
    hover: '&:hover',
  },
}

describe('system', () => {
  it('should get values from theme', () => {
    const props = {
      $color: 'primary',
      $m: 'sm',
      theme,
    }

    expect(system(props)).toEqual({ color: 'tomato', margin: '10px' })
  })

  it('should fallback without theme', () => {
    const props = {
      $color: 'primary',
      $m: 'sm',
    }

    expect(system(props)).toEqual({ color: 'primary', margin: 'sm' })
  })

  it('should apply hover style', () => {
    const props = {
      $color: { _: 'primary', hover: 'secondary' },
      $m: 'sm',
      theme,
    }

    expect(system(props)).toEqual({
      color: 'tomato',
      margin: '10px',
      '&:hover': {
        color: 'purple',
      },
    })
  })

  it('should not apply hover style if theme.space.hover does not exist', () => {
    const props = {
      $color: { _: 'primary', hover: 'secondary', '&:hover': 'secondary' },
      $m: 'sm',
      theme: { ...theme, states: undefined },
    }

    expect(system(props)).toEqual({
      color: 'tomato',
      margin: '10px',
    })
  })

  it('should apply &:hover style on multiple props', () => {
    const props = {
      $color: { _: 'primary', hover: 'secondary' },
      $m: { _: 'sm', hover: 'md' },
      theme,
    }

    expect(system(props)).toEqual({
      color: 'tomato',
      margin: '10px',
      '&:hover': {
        color: 'purple',
        margin: '20px',
      },
    })
  })

  it('should apply responsive props', () => {
    const props = {
      $color: { _: 'primary', md: 'secondary' },
      $m: { _: 'sm', md: 'md' },
      theme,
    }

    expect(system(props)).toEqual({
      color: 'tomato',
      margin: '10px',
      '@media(min-width: 1000px)': {
        color: 'purple',
        margin: '20px',
      },
    })
  })

  it('should apply responsive & hover props', () => {
    const props = {
      $color: { _: 'primary', md: 'secondary', hover: 'secondary' },
      $m: { _: 'sm', md: 'md', hover: 'md' },
      theme,
    }

    expect(system(props)).toEqual({
      color: 'tomato',
      margin: '10px',
      '&:hover': {
        color: 'purple',
        margin: '20px',
      },
      '@media(min-width: 1000px)': {
        color: 'purple',
        margin: '20px',
      },
    })
  })
})
