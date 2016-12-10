"use strict";
const paginationBase_1 = require('./core/paginationBase');
const Pager_1 = require('./core/Pager');
class NormalPagination extends paginationBase_1.PaginationBase {
    constructor(itemSize, current, dataCount, pageSize) {
        super(itemSize, current, dataCount, pageSize);
    }
    processItems() {
        var p = this.current / this.itemSize;
        var count = Math.min(this.itemSize, this.total - (p * this.itemSize));
        for (var i = 1; i <= count; i++) {
            var pi = new Pager_1.PagerItem();
            pi.index = (p * this.itemSize) + i - 1;
            pi.text = ((p * this.itemSize) + i).toString();
            pi.description = Pager_1.PagerEnum.Number;
            pi.isCurrent = pi.index == this.current;
            this.items.push(pi);
        }
    }
    first() {
        if (!this.setting.isShowFirstLastItem)
            return;
        if (this.current != 0) {
            var pi = new Pager_1.PagerItem();
            pi.index = 0;
            pi.text = this.setting.firstText;
            pi.description = Pager_1.PagerEnum.First;
            this.items.push(pi);
        }
    }
    nextGroup() {
        if (!this.setting.isShowPrevNextGroupItem)
            return;
        var p = this.current / this.itemSize;
        if (((p + 1) * this.itemSize) < this.total) {
            var pi = new Pager_1.PagerItem();
            pi.index = (p + 1) * this.itemSize;
            pi.text = this.setting.nextGroupText;
            pi.description = Pager_1.PagerEnum.LastGroup;
            this.items.push(pi);
        }
    }
    nextItem() {
        if (!this.setting.isShowPrevNextItem)
            return;
        var pi = new Pager_1.PagerItem();
        pi.index = this.current + 1;
        pi.text = this.setting.nextText;
        pi.description = Pager_1.PagerEnum.Next;
        this.items.push(pi);
        if ((this.current + 1) == this.total) {
            pi.isDisabled = true;
        }
    }
    preItem() {
        if (!this.setting.isShowPrevNextItem)
            return;
        var pi = new Pager_1.PagerItem();
        pi.index = this.current - 1;
        pi.text = this.setting.PreText;
        pi.description = Pager_1.PagerEnum.Previous;
        this.items.push(pi);
        if (this.current == 0) {
            pi.isDisabled = true;
        }
    }
    preGroup() {
        if (!this.setting.isShowPrevNextGroupItem)
            return;
        var p = this.current / this.itemSize;
        if (p > 0) {
            var pi = new Pager_1.PagerItem();
            pi.index = (p - 1) * this.itemSize;
            pi.text = this.setting.preGroupText;
            pi.description = Pager_1.PagerEnum.FirstGroup;
            this.items.push(pi);
        }
    }
    last() {
        if (!this.setting.isShowFirstLastItem)
            return;
        if (this.current < this.total - 1) {
            var pi = new Pager_1.PagerItem();
            pi.index = this.total - 1;
            pi.text = this.setting.lastText;
            pi.description = Pager_1.PagerEnum.Last;
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
exports.NormalPagination = NormalPagination;
//# sourceMappingURL=normalPagination.js.map
