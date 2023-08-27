import { expect, test } from 'vitest'

import { tw } from '../src'

test('Basic', () => {
  const result = tw`text-sm`
  expect(result).toMatchSnapshot()
})

test('Basic with expressions', () => {
  const result = tw`text-sm ${'font-bold'}   ${'bg-sky-500'}`
  expect(result).toMatchSnapshot()
})

test('Multiple lines', () => {
  const result = tw`
    text-sm  bg-sky-500
    font-bold
    text-lg
  `
  expect(result).toMatchSnapshot()
})

test('Multiple lines with expressions', () => {
  const result = tw`
    text-sm              bg-sky-400
    font-bold ${'font-bold'}   ${'bg-sky-500'}
  `
  expect(result).toMatchSnapshot()
})

test('Multiple lines with comments', () => {
  const result = tw`
    // hello
    text-sm  bg-sky-500
    font-bold
    // world
    text-lg
  `
  expect(result).toMatchSnapshot()
})
