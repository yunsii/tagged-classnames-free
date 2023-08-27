import clsx from 'clsx'

function normalizeStrings(strings: string[]) {
  let result: string[] = []

  strings.forEach((stringItem) => {
    const segments = stringItem
      .split('\n')
      .map((item) => item.trim())
      .filter((item) => !item.startsWith('//'))

    segments.forEach((item) => {
      result = result.concat(
        item
          .split(/[\t ]/)
          .map((item) => item.trim())
          .filter(Boolean),
      )
    })
  })
  return result.join(' ')
}

export function handleCls(
  strings: TemplateStringsArray,
  ...expressions: any[]
) {
  const classNamesList = strings.reduce((prev, current, currentIndex) => {
    const expression = expressions[currentIndex] || ''
    prev.push(current, clsx(expression))
    return prev
  }, [] as string[])
  return normalizeStrings(classNamesList)
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates
export function cls(strings: TemplateStringsArray, ...expressions: any[]) {
  return handleCls(strings, ...expressions)
}
