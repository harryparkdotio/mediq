# mediq
expressive media query builder

[![Travis](https://img.shields.io/travis/com/harryparkdotio/mediq/master.svg?style=for-the-badge)](https://travis-ci.com/harryparkdotio/mediq)
[![Codecov](https://img.shields.io/codecov/c/github/harryparkdotio/mediq/master.svg?style=for-the-badge)](https://codecov.io/gh/harryparkdotio/mediq)
[![license](https://img.shields.io/github/license/harryparkdotio/mediq.svg?style=for-the-badge)](https://github.com/harryparkdotio/mediq/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/v/mediq.svg?style=for-the-badge)](https://www.npmjs.com/package/mediq)

## install
```bash
$ npm i -S mediq
# or
$ yarn add mediq
```

## usage
```ts
import mediq from 'mediq';

mediq().screen.and.min.width(300).px; // --> @media screen and (min-width: 300px)
```
