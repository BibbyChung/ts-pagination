var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./core/pagerItem", "./core/paginationBase"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var pagerItem_1 = require("./core/pagerItem");
    var paginationBase_1 = require("./core/paginationBase");
    var SimplePagination = /** @class */ (function (_super) {
        __extends(SimplePagination, _super);
        function SimplePagination(itemSize, current, dataCount, pageSize) {
            return _super.call(this, itemSize, current, dataCount, pageSize) || this;
        }
        SimplePagination.prototype.first = function () {
            if (!this.setting.isShowFirstLastItem)
                return;
            if (this.current === 0)
                return;
            var pi = this.getDefaultPagerItem();
            pi.index = 0;
            pi.text = this.setting.firstText;
            pi.type = pagerItem_1.PagerEnum.First;
            this.items.push(pi);
        };
        SimplePagination.prototype.preGroup = function () {
            if (!this.setting.isShowPrevNextGroupItem)
                return;
            var p = this.getCurrentPagerStatus();
            if (p <= 0)
                return;
            var pi = this.getDefaultPagerItem();
            pi.index = (p - 1) * this.itemSize;
            pi.text = this.setting.preGroupText;
            pi.type = pagerItem_1.PagerEnum.PreGroup;
            this.items.push(pi);
        };
        SimplePagination.prototype.preItem = function () {
            if (!this.setting.isShowPrevNextItem)
                return;
            var pi = this.getDefaultPagerItem();
            pi.index = this.current - 1;
            pi.text = this.setting.PreText;
            pi.type = pagerItem_1.PagerEnum.Previous;
            this.items.push(pi);
            if (this.current === 0) {
                pi.isEnabled = false;
            }
        };
        SimplePagination.prototype.processItems = function () {
            var p = this.getCurrentPagerStatus();
            var count = Math.min(this.itemSize, this.total - (p * this.itemSize));
            for (var i = 1; i <= count; i += 1) {
                var pi = this.getDefaultPagerItem();
                pi.index = (p * this.itemSize) + i - 1;
                pi.text = ((p * this.itemSize) + i).toString();
                pi.type = pagerItem_1.PagerEnum.Number;
                pi.isCurrent = pi.index === this.current;
                this.items.push(pi);
            }
        };
        SimplePagination.prototype.nextItem = function () {
            if (!this.setting.isShowPrevNextItem)
                return;
            var pi = this.getDefaultPagerItem();
            pi.index = this.current + 1;
            pi.text = this.setting.nextText;
            pi.type = pagerItem_1.PagerEnum.Next;
            this.items.push(pi);
            if (this.current + 1 === this.total) {
                pi.isEnabled = false;
            }
        };
        SimplePagination.prototype.nextGroup = function () {
            if (!this.setting.isShowPrevNextGroupItem)
                return;
            var p = this.getCurrentPagerStatus();
            if ((p + 1) * this.itemSize >= this.total)
                return;
            var pi = this.getDefaultPagerItem();
            pi.index = (p + 1) * this.itemSize;
            pi.text = this.setting.nextGroupText;
            pi.type = pagerItem_1.PagerEnum.NextGroup;
            this.items.push(pi);
        };
        SimplePagination.prototype.last = function () {
            if (!this.setting.isShowFirstLastItem)
                return;
            if (this.current + 1 >= this.total)
                return;
            var pi = this.getDefaultPagerItem();
            pi.index = this.total - 1;
            pi.text = this.setting.lastText;
            pi.type = pagerItem_1.PagerEnum.Last;
            this.items.push(pi);
        };
        SimplePagination.prototype.getCurrentPagerStatus = function () {
            var p = Math.floor((this.current + 1) / this.itemSize);
            if (((this.current + 1) % this.itemSize) === 0)
                p -= 1;
            return p;
        };
        SimplePagination.prototype.build = function () {
            this.first();
            this.preGroup();
            this.preItem();
            this.processItems();
            this.nextItem();
            this.nextGroup();
            this.last();
        };
        return SimplePagination;
    }(paginationBase_1.PaginationBase));
    exports.SimplePagination = SimplePagination;
});

//# sourceMappingURL=simplePagination.js.map
