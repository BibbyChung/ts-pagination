"use strict";
const paginationBase_1 = require('./core/paginationBase');
const pagerItem_1 = require('./core/pagerItem');
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
        let min = Math.max(max - (this.itemSize - 1), 0);
        for (let i = min; i <= max; i++) {
            let pi = new pagerItem_1.PagerItem();
            pi.index = i;
            pi.text = (i + 1).toString();
            pi.description = pagerItem_1.PagerEnum.Number;
            pi.isCurrent = pi.index == this.current;
            this.items.push(pi);
        }
    }
    first() {
        if (!this.setting.isShowFirstLastItem)
            return;
        if (this.current != 0) {
            let pi = this.getDefaultPagerItem();
            pi.index = 0;
            pi.text = this.setting.firstText;
            pi.description = pagerItem_1.PagerEnum.First;
            this.items.push(pi);
        }
    }
    nextGroup() {
        if (!this.setting.isShowPrevNextGroupItem)
            return;
        let p = this.current / this.itemSize;
        if (((p + 1) * this.itemSize) < this.total) {
            let pi = this.getDefaultPagerItem();
            pi.index = (p + 1) * this.itemSize;
            pi.text = this.setting.nextGroupText;
            pi.description = pagerItem_1.PagerEnum.LastGroup;
            this.items.push(pi);
        }
    }
    nextItem() {
        if (!this.setting.isShowPrevNextItem)
            return;
        if ((this.current + 1) < this.total) {
            let pi = this.getDefaultPagerItem();
            pi.index = this.current + 1;
            pi.text = this.setting.nextText;
            pi.description = pagerItem_1.PagerEnum.Next;
            this.items.push(pi);
        }
    }
    preItem() {
        if (!this.setting.isShowPrevNextItem)
            return;
        if (this.current > 0) {
            let pi = this.getDefaultPagerItem();
            pi.index = this.current - 1;
            pi.text = this.setting.PreText;
            pi.description = pagerItem_1.PagerEnum.Previous;
            this.items.push(pi);
        }
    }
    preGroup() {
        if (!this.setting.isShowPrevNextGroupItem)
            return;
        let p = this.current / this.itemSize;
        if (p > 0) {
            let pi = this.getDefaultPagerItem();
            pi.index = (p - 1) * this.itemSize;
            pi.text = this.setting.preGroupText;
            pi.description = pagerItem_1.PagerEnum.FirstGroup;
            this.items.push(pi);
        }
    }
    last() {
        if (!this.setting.isShowFirstLastItem)
            return;
        if (this.current < this.total - 1) {
            let pi = this.getDefaultPagerItem();
            pi.index = this.total - 1;
            pi.text = this.setting.lastText;
            pi.description = pagerItem_1.PagerEnum.Last;
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
//# sourceMappingURL=middlePagination.js.map
