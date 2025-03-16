import { expect, it } from 'vitest'

import { tw } from '../src'

it('basic', () => {
  const result = tw`text-sm`
  expect(result).toMatchSnapshot()
})

it('basic with expressions', () => {
  const result = tw`text-sm ${'font-bold'}   ${'bg-sky-500'}`
  expect(result).toMatchSnapshot()
})

it('multiple lines', () => {
  const result = tw`
    text-sm  bg-sky-500
    font-bold
    text-lg
  `
  expect(result).toMatchSnapshot()
})

it('multiple lines with expressions', () => {
  const result = tw`
    text-sm              bg-sky-400
    font-bold ${'font-bold'}   ${'bg-sky-500'}
  `
  expect(result).toMatchSnapshot()
})

it('multiple lines with comments', () => {
  const result = tw`
    // hello
    text-sm  bg-sky-500
    font-bold
    // world
    text-lg
  `
  expect(result).toMatchSnapshot()
})
