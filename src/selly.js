// CSS combinators, as an Array
// see also: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors
const combinators = [
  '+',
  '~',
  '>',
  ' '
]

// dead simple NodeList to Array
// significantly faster than Array.prototype.slice
const toArray = nodeList => {
  const result = []
  const length = nodeList.length

  let i = 0

  for (i = 0; i < length; i++) {
    result.push(nodeList[i])
  }

  return result
}

// scope defaults to document
const selly = (selector, scope = document) => {
  // catch complex selectors
  const complex = combinators
    .map(char => selector.indexOf(char) === -1)
    .indexOf(false) === -1

  if (complex) {
    throw new Error('selly: unsupported selector (no combinators permitted).')
  }

  // cache the first character, and the remainder of the selector
  const firstChar = selector.slice(0, 1)
  const withoutFirstChar = selector.slice(1)

  // check for body tag
  if (selector === 'body') {
    return document.body
  }

  // check for head tag
  if (selector === 'head') {
    return document.head
  }

  // check for ID
  if (firstChar === '#') {
    return document.getElementById(withoutFirstChar)
  }

  // check for class name
  if (firstChar === '.') {
    return toArray(scope.getElementsByClassName(withoutFirstChar))
  }

  // check for tag name (first character is a lowercase letter)
  if (firstChar === firstChar.toLowerCase() && firstChar !== firstChar.toUpperCase()) {
    return toArray(scope.getElementsByTagName(selector))
  }

  // check for attribute
  if (firstChar === '[') {
    return toArray(scope.querySelectorAll(selector))
  }

  // at this point, something is wrong
  throw new Error('selly: unsupported and/or invalid selector.')
}

export default selly
