import { expect, test } from 'vitest'

import { cls } from '../src'

test('Basic', () => {
  const result = cls`text-sm`
  expect(result).toMatchSnapshot()
})

test('Basic with expressions', () => {
  const result = cls`text-sm ${'font-bold'}   ${'bg-sky-500'}`
  expect(result).toMatchSnapshot()
})

test('Multiple lines', () => {
  const result = cls`
    text-sm              bg-sky-500
    font-bold
  `
  expect(result).toMatchSnapshot()
})

test('Multiple lines with expressions', () => {
  const result = cls`
    text-sm              bg-sky-500
    font-bold ${'font-bold'}   ${'bg-sky-500'}
  `
  expect(result).toMatchSnapshot()
})

test('Multiple lines with comments', () => {
  const result = cls`
    // hello
    text-sm              bg-sky-500
    // world
    font-bold
  `
  expect(result).toMatchSnapshot()
})
