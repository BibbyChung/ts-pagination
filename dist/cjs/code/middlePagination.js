"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MiddlePagination = void 0;
const pagerItem_1 = require("./core/pagerItem");
const paginationBase_1 = require("./core/paginationBase");
class MiddlePagination extends paginationBase_1.PaginationBase {
    constructor(itemSize, current, dataCount, pageSize) {
        super(itemSize, current, dataCount, pageSize);
        this.range = 4;
    }
    processItems() {
        let rightNumber = this.total - (this.currentIndex + 1);
        if (rightNumber > this.range) {
            rightNumber = this.range;
        }
        let max = this.currentIndex + rightNumber;
        if (this.currentIndex < this.dataSize - this.range) {
            max = Math.min(this.total - 1, this.pagerItemSize - 1);
        }
        const min = Math.max(max - (this.pagerItemSize - 1), 0);
        for (let i = min; i <= max; i += 1) {
            const pi = new pagerItem_1.PagerItem();
            pi.index = i;
            pi.text = (i + 1).toString();
            pi.type = pagerItem_1.PagerEnum.Number;
            pi.isCurrent = pi.index === this.currentIndex;
            this._items.push(pi);
        }
    }
    first() {
        if (!this.setting.isShowFirstLastItem) {
            return;
        }
        if (this.currentIndex !== 0) {
            const pi = this.getDefaultPagerItem();
            pi.index = 0;
            pi.text = this.setting.firstText;
            pi.type = pagerItem_1.PagerEnum.First;
            this._items.push(pi);
        }
    }
    nextGroup() {
        if (!this.setting.isShowPrevNextGroupItem) {
            return;
        }
        const p = this.currentIndex / this.pagerItemSize;
        if (((p + 1) * this.pagerItemSize) < this.total) {
            const pi = this.getDefaultPagerItem();
            pi.index = (p + 1) * this.pagerItemSize;
            pi.text = this.setting.nextGroupText;
            pi.type = pagerItem_1.PagerEnum.NextGroup;
            this._items.push(pi);
        }
    }
    nextItem() {
        if (!this.setting.isShowPrevNextItem) {
            return;
        }
        if ((this.currentIndex + 1) < this.total) {
            const pi = this.getDefaultPagerItem();
            pi.index = this.currentIndex + 1;
            pi.text = this.setting.nextText;
            pi.type = pagerItem_1.PagerEnum.Next;
            this._items.push(pi);
        }
    }
    preItem() {
        if (!this.setting.isShowPrevNextItem) {
            return;
        }
        if (this.currentIndex > 0) {
            const pi = this.getDefaultPagerItem();
            pi.index = this.currentIndex - 1;
            pi.text = this.setting.PreText;
            pi.type = pagerItem_1.PagerEnum.Previous;
            this._items.push(pi);
        }
    }
    preGroup() {
        if (!this.setting.isShowPrevNextGroupItem) {
            return;
        }
        const p = this.currentIndex / this.pagerItemSize;
        if (p > 0) {
            const pi = this.getDefaultPagerItem();
            pi.index = (p - 1) * this.pagerItemSize;
            pi.text = this.setting.preGroupText;
            pi.type = pagerItem_1.PagerEnum.PreGroup;
            this._items.push(pi);
        }
    }
    last() {
        if (!this.setting.isShowFirstLastItem) {
            return;
        }
        if (this.currentIndex < this.total - 1) {
            const pi = this.getDefaultPagerItem();
            pi.index = this.total - 1;
            pi.text = this.setting.lastText;
            pi.type = pagerItem_1.PagerEnum.Last;
            this._items.push(pi);
        }
    }
}
exports.MiddlePagination = MiddlePagination;
//# sourceMappingURL=middlePagination.js.map