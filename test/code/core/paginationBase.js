(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./pagerItem", "./paginationSetting"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var pagerItem_1 = require("./pagerItem");
    var paginationSetting_1 = require("./paginationSetting");
    var PaginationBase = /** @class */ (function () {
        function PaginationBase(itemSize, current, dataCount, pageSize) {
            this.itemSize = itemSize;
            this.current = current;
            this.dataCount = dataCount;
            this.pageSize = pageSize;
            this.items = [];
            this.setDefaultSetting();
            this.setTotal();
            this.itemSize = parseInt(this.itemSize.toString(), 10);
            this.current = parseInt(this.current.toString(), 10);
            this.dataCount = parseInt(this.dataCount.toString(), 10);
            this.pageSize = parseInt(this.pageSize.toString(), 10);
        }
        PaginationBase.prototype.setTotal = function () {
            this.total = Math.ceil(this.dataCount / this.pageSize);
        };
        PaginationBase.prototype.setDefaultSetting = function () {
            var ps = new paginationSetting_1.PaginationSetting();
            ps.firstText = 'first';
            ps.lastText = 'last';
            ps.preGroupText = '<<';
            ps.nextGroupText = '>>';
            ps.PreText = '<';
            ps.nextText = '>';
            ps.isShowFirstLastItem = true;
            ps.isShowPrevNextGroupItem = true;
            ps.isShowPrevNextItem = true;
            this.setting = ps;
        };
        PaginationBase.prototype.getDefaultPagerItem = function () {
            var pi = new pagerItem_1.PagerItem();
            pi.isCurrent = false;
            pi.isEnabled = true;
            return pi;
        };
        return PaginationBase;
    }());
    exports.PaginationBase = PaginationBase;
});
//# sourceMappingURL=paginationBase.js.map
