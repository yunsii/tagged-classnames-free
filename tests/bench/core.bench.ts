import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { bench } from 'vitest'

bench('clsx', () => {
  clsx('text-xs flex justify-center align-center')
})

bench('tw', () => {
  twMerge('text-xs flex justify-center align-center')
})
