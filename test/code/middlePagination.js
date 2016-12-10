"use strict";
const paginationBase_1 = require('./core/paginationBase');
const pager_1 = require('./core/pager');
class MiddlePagination extends paginationBase_1.PaginationBase {
    constructor(itemSize, current, dataCount, pageSize) {
        super(itemSize, current, dataCount, pageSize);
        this.range = 4;
    }
    processItems() {
        var rightNumber = this.total - (this.current + 1);
        if (rightNumber > this.range) {
            rightNumber = this.range;
        }
        var max = this.current + rightNumber;
        if (this.current < this.pageSize - this.range) {
            max = Math.min(this.total - 1, this.itemSize - 1);
        }
        var min = Math.max(max - (this.itemSize - 1), 0);
        for (var i = min; i <= max; i++) {
            var pi = new pager_1.PagerItem();
            pi.index = i;
            pi.text = (i + 1).toString();
            pi.description = pager_1.PagerEnum.Number;
            pi.isCurrent = pi.index == this.current;
            this.items.push(pi);
        }
    }
    first() {
        if (!this.setting.isShowFirstLastItem)
            return;
        if (this.current != 0) {
            var pi = new pager_1.PagerItem();
            pi.index = 0;
            pi.text = this.setting.firstText;
            pi.description = pager_1.PagerEnum.First;
            this.items.push(pi);
        }
    }
    nextGroup() {
        if (!this.setting.isShowPrevNextGroupItem)
            return;
        var p = this.current / this.itemSize;
        if (((p + 1) * this.itemSize) < this.total) {
            var pi = new pager_1.PagerItem();
            pi.index = (p + 1) * this.itemSize;
            pi.text = this.setting.nextGroupText;
            pi.description = pager_1.PagerEnum.LastGroup;
            this.items.push(pi);
        }
    }
    nextItem() {
        if (!this.setting.isShowPrevNextItem)
            return;
        if ((this.current + 1) < this.total) {
            var pi = new pager_1.PagerItem();
            pi.index = this.current + 1;
            pi.text = this.setting.nextText;
            pi.description = pager_1.PagerEnum.Next;
            this.items.push(pi);
        }
    }
    preItem() {
        if (!this.setting.isShowPrevNextItem)
            return;
        if (this.current > 0) {
            var pi = new pager_1.PagerItem();
            pi.index = this.current - 1;
            pi.text = this.setting.PreText;
            pi.description = pager_1.PagerEnum.Previous;
            this.items.push(pi);
        }
    }
    preGroup() {
        if (!this.setting.isShowPrevNextGroupItem)
            return;
        var p = this.current / this.itemSize;
        if (p > 0) {
            var pi = new pager_1.PagerItem();
            pi.index = (p - 1) * this.itemSize;
            pi.text = this.setting.preGroupText;
            pi.description = pager_1.PagerEnum.FirstGroup;
            this.items.push(pi);
        }
    }
    last() {
        if (!this.setting.isShowFirstLastItem)
            return;
        if (this.current < this.total - 1) {
            var pi = new pager_1.PagerItem();
            pi.index = this.total - 1;
            pi.text = this.setting.lastText;
            pi.description = pager_1.PagerEnum.Last;
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
