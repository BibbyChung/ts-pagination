# ts-pagination [![Build Status](https://travis-ci.org/BibbyChung/ts-pagination.svg?branch=master)](https://travis-ci.org/BibbyChung/ts-pagination) [![npm](https://img.shields.io/npm/v/ts-pagination.svg?maxAge=2592000)]()

Pagination for Nodejs and JavaScript..

## Install

Install this component

```shell
$ npm install ts-pagination --save
```

## Quick Start

You have both choices of TypeScirpt or JavaScript. Up to you.

### TypeScript

```javascript

//simple pagination
import { SimplePagination } from 'ts-pagination';

let itemSize = 8; //pagination items per page
let current = 3 //current pagination item
let dataCount = 150, //total data items count
let pageSize: 10; //data items per page

let simpleP = new SimplePagination(itemSize, current, dataCount, pageSize);
simpleP.build();

for (let p of simpleP.items) {
    //do something..
}

```

### JavaScript 
(later..)

## Todo
- middle pagination
