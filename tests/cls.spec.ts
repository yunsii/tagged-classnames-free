import { expect, it } from 'vitest'

import { cls } from '../src'

it('basic', () => {
  const result = cls`text-sm`
  expect(result).toMatchSnapshot()
})

it('basic with expressions', () => {
  const result = cls`text-sm ${'font-bold'}   ${'bg-sky-500'}`
  expect(result).toMatchSnapshot()
})

it('multiple lines', () => {
  const result = cls`
    text-sm              bg-sky-500
    font-bold
  `
  expect(result).toMatchSnapshot()
})

it('multiple lines with expressions', () => {
  const result = cls`
    text-sm              bg-sky-500
    font-bold ${'font-bold'}   ${'bg-sky-500'}
  `
  expect(result).toMatchSnapshot()
})

it('multiple lines with comments', () => {
  const result = cls`
    // hello
    text-sm              bg-sky-500
    // world
    font-bold
  `
  expect(result).toMatchSnapshot()
})
