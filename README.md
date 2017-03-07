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
const body = selly('body')        // select document.body
const one = selly('#one')         // select by ID
const many = selly('.many')       // select by class (returns an Array)
const divs = selly('div')         // select by tag name (returns an Array)

// unoptimized (uses querySelectorAll)
const attribute = selly('[attribute]')
```

## License

[MIT](https://opensource.org/licenses/MIT). © 2017 Michael Cavalea
