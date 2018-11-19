import { PaginationSetting } from './code/core/paginationSetting';
import { PagerItem, PagerEnum } from './code/core/pagerItem';
import { PaginationBase } from './code/core/paginationBase';

import { SimplePagination } from './code/simplePagination';

// let simpleP = new SimplePagination(3, 11, 64, 5);
// simpleP.build();
// for (let p of simpleP.items) {
//     console.log(p);
// }
// console.log("total", simpleP.total);
// console.log("current", simpleP.current);

// import { MiddlePagination } from './code/middlePagination';

// let middle = new MiddlePagination(9, 10, 1000, 10);
// middle.build();
// for(let p of middle.items){
//     console.log(p);
// }

export {
    PagerItem,
    PagerEnum,
    PaginationBase,
    SimplePagination,
    PaginationSetting,
};
