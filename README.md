# ts-pagination [![Build Status](https://travis-ci.org/BibbyChung/ts-pagination.svg?branch=master)](https://travis-ci.org/BibbyChung/ts-pagination) [![npm](https://img.shields.io/npm/v/ts-pagination.svg)](https://github.com/BibbyChung/ts-pagination) 


Pagination for Nodejs and JavaScript..

## Install

Install this component

```shell
$ npm install ts-pagination --save
```

## Quick Start

You have both choices of TypeScirpt or JavaScript.

### TypeScript

```js

//simple pagination
import { SimplePagination } from 'ts-pagination';

const pagerItemSize = 8; // pager item size per page
const currentIndex = 3; // currentIndex pagination item
const dataTotal = 151; // total data count
const dataSize = 10; // data items per page

const simpleP = new SimplePagination(pagerItemSize, currentIndex, dataTotal, dataSize);

for (let p of simpleP.items) {
    //do something..
}

//customize your wording
const setting = new PaginationSetting();
setting.firstText = 'firstText';
setting.lastText = 'lastText';
setting.nextGroupText = 'nextGroupText';
setting.preGroupText = 'preGroupText';
setting.PreText = 'PreText';
setting.nextText = 'nextText';

pagination = new SimplePagination(pageInfo.pagerItemSize, pageInfo.currentIndex, pageInfo.dataTotal, pageInfo.dataSize);
pagination.setting = setting;

```

### JavaScript 
(later..)

## API

```js
PaginationBase {
    pagerItemSize: number;
    currentIndex: number;
    dataTotal: number;
    dataSize: number;
    items: PagerItem[];
    setting: PaginationSetting;
    total: number;
}

PaginationSetting {
    firstText: string;
    lastText: string;
    preGroupText: string;
    nextGroupText: string;
    PreText: string;
    nextText: string;
    isShowFirstLastItem: boolean;
    isShowPrevNextGroupItem: boolean;
    isShowPrevNextItem: boolean;
}

PagerItem {
    index: number;
    text: string;
    type: PagerEnum;
    isCurrent: boolean;
    isEnabled: boolean;
}

PagerEnum {
    Number = 0,
    First = 1,
    Last = 2,
    PreGroup = 3,
    NextGroup = 4,
    Previous = 5,
    Next = 6,
}
```

## Todo
- middle pagination
