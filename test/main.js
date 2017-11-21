(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./code/core/paginationSetting", "./code/core/pagerItem", "./code/core/paginationBase", "./code/simplePagination"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var paginationSetting_1 = require("./code/core/paginationSetting");
    exports.PaginationSetting = paginationSetting_1.PaginationSetting;
    var pagerItem_1 = require("./code/core/pagerItem");
    exports.PagerItem = pagerItem_1.PagerItem;
    exports.PagerEnum = pagerItem_1.PagerEnum;
    var paginationBase_1 = require("./code/core/paginationBase");
    exports.PaginationBase = paginationBase_1.PaginationBase;
    var simplePagination_1 = require("./code/simplePagination");
    exports.SimplePagination = simplePagination_1.SimplePagination;
});
//# sourceMappingURL=main.js.map
