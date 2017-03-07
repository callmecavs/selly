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

const selly = selector => {
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
    return toArray(document.getElementsByClassName(withoutFirstChar))
  }

  // check for tag name (first character is a lowercase letter)
  if (firstChar === firstChar.toLowerCase() && firstChar !== firstChar.toUpperCase()) {
    return toArray(document.getElementsByTagName(selector))
  }

  // default to qSA, for attribute selectors
  return toArray(document.querySelectorAll(selector))
}

export default selly
