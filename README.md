# ts-pagination [![Build Status](https://travis-ci.org/BibbyChung/ts-pagination.svg?branch=master)](https://travis-ci.org/BibbyChung/ts-pagination) [![npm](https://img.shields.io/npm/v/ts-pagination.svg?maxAge=2592000)]()

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

const itemSize = 8; // pagination items per page
const current = 3; // current pagination item
const dataCount = 151; // total data items count
const pageSize = 10; // data items per page

const simpleP = new SimplePagination(itemSize, current, dataCount, pageSize);
simpleP.build();

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

pagination = new SimplePagination(pageInfo.itemSize, pageInfo.current, pageInfo.dataCount, pageInfo.pageSize);
pagination.setting = setting;
pagination.build();

```

### JavaScript 
(later..)

## API

```js
PaginationBase {
    itemSize: number;
    current: number;
    dataCount: number;
    pageSize: number;
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
