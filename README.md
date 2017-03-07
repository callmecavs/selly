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
const byAttr = selly('[attribute]')       // select by attribute

// want even more performance?
// pass a scope element to search (defaults to document)
const meta = selly('meta', head)

// nested
const scripts = selly('script', selly('body'))
```

## License

[MIT](https://opensource.org/licenses/MIT). © 2017 Michael Cavalea
