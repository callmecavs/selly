# selly

[![selly on NPM](https://img.shields.io/npm/v/selly.svg?style=flat-square)](https://www.npmjs.com/package/selly) [![Standard JavaScript Style](https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com/)

Convenient and optimized DOM element selection.

## Install

```sh
$ npm i selly --save
```

## Use

```javascript
import select from 'selly'

// optimized
const body = selly('body')                // select document.body
const head = selly('head')                // select document.head

const byID = selly('#one')                // select by ID
const byClass = selly('.many')            // select by class (returns an Array)

const byTag = selly('div')                // select by tag name (returns an Array)

// unoptimized (querySelectorAll)
const byAttr = selly('[attribute]')       // select by attribute (returns an Array)

// using a scope element (defaults to document)
const meta = selly('meta', head)

// nested
const scripts = selly('script', selly('body'))
```

Note that as of [v0.1.0](https://github.com/callmecavs/selly/releases), if only 1 element matches a selector passed to `selly`, that element will be returned (instead of an Array containing only 1 item).

```javascript
const unique = selly('.unique')

// since only 1 element matched, logs HTMLElement not [HTMLElement]
console.log(unique)
```

## License

[MIT](https://opensource.org/licenses/MIT). © 2017 Michael Cavalea
