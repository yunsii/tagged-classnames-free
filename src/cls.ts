import clsx from 'clsx'

function normalizeStrings(strings: string[]) {
  const lineCommentPattern = /\/\/.*((\r?\n)|$)/g

  let result = strings.join(' ')

  if (result.includes('//')) {
    result = result.replace(lineCommentPattern, '')
  }

  return result.replace(/\s+/g, ' ').trim()
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
