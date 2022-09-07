/* eslint-disable @typescript-eslint/no-var-requires */
const Benchmark = require('benchmark')
const xstyled = require('@xstyled/system')
const styledSystem = require('styled-system')
const jsxToStyled = require('jsx-to-styled')

const suite = new Benchmark.Suite('colors')

const xStyledProps = {
  theme: {},
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
}
const runXstyled = () => xstyled.flexboxes(xStyledProps)

const styledSystemProps = {
  theme: {},
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
}
const runStyledSystem = () => styledSystem.flexbox(styledSystemProps)

const jsxToStyledProps = {
  theme: {},
  $justifyContent: 'center',
  $flexDirection: 'column',
  $alignItems: 'center',
}
const runJsxToStyled = () => jsxToStyled.flex(jsxToStyledProps)

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
