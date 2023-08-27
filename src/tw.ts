import { twMerge } from 'tailwind-merge'

import { handleCls } from './cls'

export function tw(strings: TemplateStringsArray, ...expressions: any[]) {
  const clsResult = handleCls(strings, ...expressions)
  return twMerge(clsResult)
}
