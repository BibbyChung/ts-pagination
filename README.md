# ts-pagination [![Build Status](https://img.shields.io/github/actions/workflow/status/bibbychung/ts-pagination/ci.yml?branch=master)](https://img.shields.io/github/actions/workflow/status/bibbychung/ts-pagination/ci.yml?branch=master) [![npm](https://img.shields.io/npm/v/ts-pagination.svg)](https://github.com/BibbyChung/ts-pagination) [![Coverage Status](https://coveralls.io/repos/github/BibbyChung/ts-pagination/badge.svg?branch=master)](https://coveralls.io/github/BibbyChung/ts-pagination?branch=master)

Pagination for Nodejs and JavaScript..

## 🔥🔥🔥 Break Change 🔥🔥🔥

I rewrite it to 3.0 making performance better and size smaller. So if you use 3.0 above, please check "How to use" section again.

## Install

```shell
$ npm install ts-pagination --save
```

### How to use

```js
import { getSimplePagination } from "ts-pagination";

const data = [
  { id: "1", name: "bb0", age: 25 },
  { id: "2", name: "bb1", age: 26 },
  { id: "3", name: "bb2", age: 27 },
  { id: "4", name: "bb3", age: 28 },
  { id: "5", name: "bb4", age: 29 },
  { id: "6", name: "bb5", age: 210 },
];

const sPagination = getSimplePagination(
  {
    currentPage: 1,
    size: 5,
    total: data.length,
  },
  3,
  {
    firstText: "first",
    lastText: "last",
    preGroupText: "<<",
    nextGroupText: ">>",
    PreText: "<",
    nextText: ">",
    isShowFirstLastItem: true,
    isShowPrevNextGroupItem: true,
    isShowPrevNextItem: true,
  }
);
console.log(sPagination);
```

## Demo

<img width="464" alt="image" src="https://user-images.githubusercontent.com/8520661/214093678-85eb61ed-fa2a-4051-89e7-6c0523b1d8a9.png">

[playground](https://stackblitz.com/edit/vitejs-vite-dxv9cy)

## Todos

- [x] UI demo
- [x] testing
- [ ] middle pagination

## Code Coverage

```bash
-------------------------|---------|----------|---------|---------|-------------------
File                     | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
-------------------------|---------|----------|---------|---------|-------------------
All files                |     100 |      100 |     100 |     100 |
 src                     |     100 |      100 |     100 |     100 |
  _index.ts              |     100 |      100 |     100 |     100 |
 src/code                |     100 |      100 |     100 |     100 |
  core.ts                |     100 |      100 |     100 |     100 |
  getSimplePagination.ts |     100 |      100 |     100 |     100 |
-------------------------|---------|----------|---------|---------|-------------------
```

## Workspace

```
docker run --rm -it \
  -w /app \
  -v $(pwd):/app \
  -p 3000:3000 \
  -p 10000:10000 \
  -p 24678:24678 \
  node:16.19-alpine /bin/sh

apk add --no-cache bash &&\
	npm i -g pnpm
```
