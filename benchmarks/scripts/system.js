/* eslint-disable @typescript-eslint/no-var-requires */
const Benchmark = require('benchmark')
const xstyled = require('@xstyled/system')
const styledSystem = require('styled-system')
const jsxToStyled = require('jsx-to-styled')

const suite = new Benchmark.Suite('colors')

const xstyledSystem = xstyled.compose(xstyled.typography, xstyled.space)
const styledSystemSystem = styledSystem.compose(styledSystem.typography, styledSystem.space)
const jsxToStyledSystem = jsxToStyled.compose(jsxToStyled.typography, jsxToStyled.space)

const theme = {
  p: { xs: 1, md: 20 },
  mt: '10px',
  m: '20px',
  fontSize: '10px',
}

const xStyledProps = {
  theme,
  color: 'primary',
}
const runXstyled = () => xstyled.system(xStyledProps)

const styledSystemProps = {
  theme,
  color: 'primary',
}
const runStyledSystem = () => styledSystem.system(styledSystemProps)

const jsxToStyledProps = {
  theme,
  $color: 'primary',
}
const runJsxToStyled = () => jsxToStyled.system(jsxToStyledProps)

console.log('@xstyled/system', runXstyled())
console.log('styled-system', runStyledSystem())
console.log('jsx-to-styled', runJsxToStyled())

suite
  .add('@xstyled/system', runXstyled)
  .add('styled-system', runStyledSystem)
  .add('jsx-to-styled', runJsxToStyled)
  .on('cycle', event => {
    console.log(String(event.target))
  })
  .on('complete', function onComplete() {
    console.log(`Fastest is ${this.filter('fastest').map('name')}`)
  })
  .run({ async: true })
