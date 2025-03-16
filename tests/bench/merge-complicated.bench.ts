import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { bench } from 'vitest'

const testSize = 20

bench('clsx', () => {
  Array.from({ length: testSize }).fill(null).forEach((_, index) => {
    const sizeClassNames = index % 2 ? 'sm:w-20 h-40' : 'sm:w-auto h-20'
    clsx('text-xs flex justify-center align-center', sizeClassNames, `index-${index}`)
  })
})

bench('tw', () => {
  Array.from({ length: testSize }).fill(null).forEach((_, index) => {
    const sizeClassNames = index % 2 ? 'sm:w-auto sm:w-20 h-40' : 'sm:w-auto sm:w-20 h-40 h-20'
    twMerge('text-xs flex justify-center align-center', sizeClassNames, `index-${index}`)
  })
})
