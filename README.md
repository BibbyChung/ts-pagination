# ts-pagination [![Build Status](https://img.shields.io/github/actions/workflow/status/bibbychung/ts-pagination/ci.yml?branch=master)](https://img.shields.io/github/actions/workflow/status/bibbychung/ts-pagination/ci.yml?branch=master) [![npm](https://img.shields.io/npm/v/ts-pagination.svg)](https://github.com/BibbyChung/ts-pagination)

Pagination for Nodejs and JavaScript..

## 🔥🔥🔥 Break Change 🔥🔥🔥

I rewrite it to 3.0 making performance better. So if you use 3.0 above, please check "How to use" section again.

## Install

```shell
$ npm install ts-pagination --save
```

### How to use

```js
import { getSimplePagination } from "./code/getSimplePagination";

const data = [
  { id: "fb5ea67d-bc35-4be6-8993-88c2adb8b503", name: "bb0", age: 25 },
  { id: "2fbdb2fb-1d97-4500-b765-ff93744e0d98", name: "bb1", age: 26 },
  { id: "ba3024f3-2497-47e2-ae11-90556bc084dd", name: "bb2", age: 27 },
  { id: "bdf07a1d-2d95-4475-9f71-299357c5250f", name: "bb3", age: 28 },
  { id: "cff6e164-7f8d-4956-9686-fdcd219d03e5", name: "bb4", age: 29 },
  { id: "849eaeca-ba38-44fc-98f3-d7d0f9081278", name: "bb5", age: 210 },
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

## Todo

- middle pagination

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
