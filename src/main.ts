import { PaginationSetting } from './code/core/paginationSetting';
import { PagerItem, PagerEnum } from './code/core/pagerItem';
import { PaginationBase } from './code/core/paginationBase';

import { SimplePagination } from './code/simplePagination';

// let normal = new NormalPagination(3, 11, 64, 5);
// normal.build();
// for (let p of normal.items) {
//     console.log(p);
// }
// console.log("total", normal.total);
// console.log("current", normal.current);

//import { MiddlePagination } from './code/middlePagination';

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
    PaginationSetting
};