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
    const pagerItem_1 = require("./core/pagerItem");
    const paginationBase_1 = require("./core/paginationBase");
    class MiddlePagination extends paginationBase_1.PaginationBase {
        constructor(itemSize, current, dataCount, pageSize) {
            super(itemSize, current, dataCount, pageSize);
            this.range = 4;
        }
        processItems() {
            let rightNumber = this.total - (this.current + 1);
            if (rightNumber > this.range) {
                rightNumber = this.range;
            }
            let max = this.current + rightNumber;
            if (this.current < this.pageSize - this.range) {
                max = Math.min(this.total - 1, this.itemSize - 1);
            }
            const min = Math.max(max - (this.itemSize - 1), 0);
            for (let i = min; i <= max; i += 1) {
                const pi = new pagerItem_1.PagerItem();
                pi.index = i;
                pi.text = (i + 1).toString();
                pi.type = pagerItem_1.PagerEnum.Number;
                pi.isCurrent = pi.index === this.current;
                this.items.push(pi);
            }
        }
        first() {
            if (!this.setting.isShowFirstLastItem)
                return;
            if (this.current !== 0) {
                const pi = this.getDefaultPagerItem();
                pi.index = 0;
                pi.text = this.setting.firstText;
                pi.type = pagerItem_1.PagerEnum.First;
                this.items.push(pi);
            }
        }
        nextGroup() {
            if (!this.setting.isShowPrevNextGroupItem)
                return;
            const p = this.current / this.itemSize;
            if (((p + 1) * this.itemSize) < this.total) {
                const pi = this.getDefaultPagerItem();
                pi.index = (p + 1) * this.itemSize;
                pi.text = this.setting.nextGroupText;
                pi.type = pagerItem_1.PagerEnum.NextGroup;
                this.items.push(pi);
            }
        }
        nextItem() {
            if (!this.setting.isShowPrevNextItem)
                return;
            if ((this.current + 1) < this.total) {
                const pi = this.getDefaultPagerItem();
                pi.index = this.current + 1;
                pi.text = this.setting.nextText;
                pi.type = pagerItem_1.PagerEnum.Next;
                this.items.push(pi);
            }
        }
        preItem() {
            if (!this.setting.isShowPrevNextItem)
                return;
            if (this.current > 0) {
                const pi = this.getDefaultPagerItem();
                pi.index = this.current - 1;
                pi.text = this.setting.PreText;
                pi.type = pagerItem_1.PagerEnum.Previous;
                this.items.push(pi);
            }
        }
        preGroup() {
            if (!this.setting.isShowPrevNextGroupItem)
                return;
            const p = this.current / this.itemSize;
            if (p > 0) {
                const pi = this.getDefaultPagerItem();
                pi.index = (p - 1) * this.itemSize;
                pi.text = this.setting.preGroupText;
                pi.type = pagerItem_1.PagerEnum.PreGroup;
                this.items.push(pi);
            }
        }
        last() {
            if (!this.setting.isShowFirstLastItem)
                return;
            if (this.current < this.total - 1) {
                const pi = this.getDefaultPagerItem();
                pi.index = this.total - 1;
                pi.text = this.setting.lastText;
                pi.type = pagerItem_1.PagerEnum.Last;
                this.items.push(pi);
            }
        }
        build() {
            this.first();
            this.preGroup();
            this.preItem();
            this.processItems();
            this.nextItem();
            this.nextGroup();
            this.last();
        }
    }
    exports.MiddlePagination = MiddlePagination;
});

//# sourceMappingURL=middlePagination.js.map
