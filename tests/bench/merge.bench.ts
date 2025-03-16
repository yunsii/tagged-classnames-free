import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { bench } from 'vitest'

const testSize = 20

bench('clsx', () => {
  Array.from({ length: testSize }).fill(null).forEach((_, index) => {
    const sizeClassNames = index % 2 ? 'w-20' : 'w-auto'
    clsx('text-xs flex justify-center align-center', sizeClassNames, `index-${index}`)
  })
})

bench('tw', () => {
  Array.from({ length: testSize }).fill(null).forEach((_, index) => {
    const sizeClassNames = index % 2 ? 'w-auto w-20' : 'w-auto w-20'
    twMerge('text-xs flex justify-center align-center', sizeClassNames, `index-${index}`)
  })
})
