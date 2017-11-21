(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", './code/core/paginationSetting', './code/core/pagerItem', './code/core/paginationBase', './code/simplePagination'], factory);
    }
})(function (require, exports) {
    "use strict";
    var paginationSetting_1 = require('./code/core/paginationSetting');
    exports.PaginationSetting = paginationSetting_1.PaginationSetting;
    var pagerItem_1 = require('./code/core/pagerItem');
    exports.PagerItem = pagerItem_1.PagerItem;
    exports.PagerEnum = pagerItem_1.PagerEnum;
    var paginationBase_1 = require('./code/core/paginationBase');
    exports.PaginationBase = paginationBase_1.PaginationBase;
    var simplePagination_1 = require('./code/simplePagination');
    exports.SimplePagination = simplePagination_1.SimplePagination;
    // let simpleP = new SimplePagination(3, 11, 64, 5);
    // simpleP.build();
    // for (let p of simpleP.items) {
    //     console.log(p);
    // }
    // console.log("total", simpleP.total);
    // console.log("current", simpleP.current);
    //import { MiddlePagination } from './code/middlePagination';
    // let middle = new MiddlePagination(9, 10, 1000, 10);
    // middle.build();
    // for(let p of middle.items){
    //     console.log(p);
    // }
});
//# sourceMappingURL=main.js.map
