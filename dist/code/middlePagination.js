var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", './core/pagerItem', './core/paginationBase'], factory);
    }
})(function (require, exports) {
    "use strict";
    var pagerItem_1 = require('./core/pagerItem');
    var paginationBase_1 = require('./core/paginationBase');
    var MiddlePagination = (function (_super) {
        __extends(MiddlePagination, _super);
        function MiddlePagination(itemSize, current, dataCount, pageSize) {
            _super.call(this, itemSize, current, dataCount, pageSize);
            this.range = 4;
        }
        MiddlePagination.prototype.processItems = function () {
            var rightNumber = this.total - (this.current + 1);
            if (rightNumber > this.range) {
                rightNumber = this.range;
            }
            var max = this.current + rightNumber;
            if (this.current < this.pageSize - this.range) {
                max = Math.min(this.total - 1, this.itemSize - 1);
            }
            var min = Math.max(max - (this.itemSize - 1), 0);
            for (var i = min; i <= max; i += 1) {
                var pi = new pagerItem_1.PagerItem();
                pi.index = i;
                pi.text = (i + 1).toString();
                pi.type = pagerItem_1.PagerEnum.Number;
                pi.isCurrent = pi.index === this.current;
                this.items.push(pi);
            }
        };
        MiddlePagination.prototype.first = function () {
            if (!this.setting.isShowFirstLastItem)
                return;
            if (this.current !== 0) {
                var pi = this.getDefaultPagerItem();
                pi.index = 0;
                pi.text = this.setting.firstText;
                pi.type = pagerItem_1.PagerEnum.First;
                this.items.push(pi);
            }
        };
        MiddlePagination.prototype.nextGroup = function () {
            if (!this.setting.isShowPrevNextGroupItem)
                return;
            var p = this.current / this.itemSize;
            if (((p + 1) * this.itemSize) < this.total) {
                var pi = this.getDefaultPagerItem();
                pi.index = (p + 1) * this.itemSize;
                pi.text = this.setting.nextGroupText;
                pi.type = pagerItem_1.PagerEnum.NextGroup;
                this.items.push(pi);
            }
        };
        MiddlePagination.prototype.nextItem = function () {
            if (!this.setting.isShowPrevNextItem)
                return;
            if ((this.current + 1) < this.total) {
                var pi = this.getDefaultPagerItem();
                pi.index = this.current + 1;
                pi.text = this.setting.nextText;
                pi.type = pagerItem_1.PagerEnum.Next;
                this.items.push(pi);
            }
        };
        MiddlePagination.prototype.preItem = function () {
            if (!this.setting.isShowPrevNextItem)
                return;
            if (this.current > 0) {
                var pi = this.getDefaultPagerItem();
                pi.index = this.current - 1;
                pi.text = this.setting.PreText;
                pi.type = pagerItem_1.PagerEnum.Previous;
                this.items.push(pi);
            }
        };
        MiddlePagination.prototype.preGroup = function () {
            if (!this.setting.isShowPrevNextGroupItem)
                return;
            var p = this.current / this.itemSize;
            if (p > 0) {
                var pi = this.getDefaultPagerItem();
                pi.index = (p - 1) * this.itemSize;
                pi.text = this.setting.preGroupText;
                pi.type = pagerItem_1.PagerEnum.PreGroup;
                this.items.push(pi);
            }
        };
        MiddlePagination.prototype.last = function () {
            if (!this.setting.isShowFirstLastItem)
                return;
            if (this.current < this.total - 1) {
                var pi = this.getDefaultPagerItem();
                pi.index = this.total - 1;
                pi.text = this.setting.lastText;
                pi.type = pagerItem_1.PagerEnum.Last;
                this.items.push(pi);
            }
        };
        MiddlePagination.prototype.build = function () {
            this.first();
            this.preGroup();
            this.preItem();
            this.processItems();
            this.nextItem();
            this.nextGroup();
            this.last();
        };
        return MiddlePagination;
    }(paginationBase_1.PaginationBase));
    exports.MiddlePagination = MiddlePagination;
});

//# sourceMappingURL=middlePagination.js.map
