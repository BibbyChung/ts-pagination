"use strict";
const paginationBase_1 = require('./core/paginationBase');
const paginationItem_1 = require('./core/paginationItem');
const IPagination_1 = require('./core/IPagination');
class MiddlePagination extends paginationBase_1.PaginationBase {
    constructor() {
        super();
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
            var pi = new paginationItem_1.PaginationItem();
            pi.index = i;
            pi.text = (i + 1).toString();
            pi.description = IPagination_1.paginationEnum.Number;
            pi.isCurrent = pi.index == this.current;
            this.items.push(pi);
        }
    }
    first() {
        if (!this.setting.isShowFirstLastItem)
            return;
        if (this.current != 0) {
            var pi = new paginationItem_1.PaginationItem();
            pi.index = 0;
            pi.text = this.setting.firstText;
            pi.description = IPagination_1.paginationEnum.First;
            this.items.push(pi);
        }
    }
    nextGroup() {
        if (!this.setting.isShowPrevNextGroupItem)
            return;
        var p = this.current / this.itemSize;
        if (((p + 1) * this.itemSize) < this.total) {
            var pi = new paginationItem_1.PaginationItem();
            pi.index = (p + 1) * this.itemSize;
            pi.text = this.setting.nextGroupText;
            pi.description = IPagination_1.paginationEnum.LastGroup;
            this.items.push(pi);
        }
    }
    nextPage() {
        if (!this.setting.isShowPrevNextItem)
            return;
        if ((this.current + 1) < this.total) {
            var pi = new paginationItem_1.PaginationItem();
            pi.index = this.current + 1;
            pi.text = this.setting.nextOneText;
            pi.description = IPagination_1.paginationEnum.Next;
            this.items.push(pi);
        }
    }
    prePage() {
        if (!this.setting.isShowPrevNextItem)
            return;
        if (this.current > 0) {
            var pi = new paginationItem_1.PaginationItem();
            pi.index = this.current - 1;
            pi.text = this.setting.PrevOneText;
            pi.description = IPagination_1.paginationEnum.Previous;
            this.items.push(pi);
        }
    }
    preGroup() {
        if (!this.setting.isShowPrevNextGroupItem)
            return;
        var p = this.current / this.itemSize;
        if (p > 0) {
            var pi = new paginationItem_1.PaginationItem();
            pi.index = (p - 1) * this.itemSize;
            pi.text = this.setting.prevGroupText;
            pi.description = IPagination_1.paginationEnum.FirstGroup;
            this.items.push(pi);
        }
    }
    last() {
        if (!this.setting.isShowFirstLastItem)
            return;
        if (this.current < this.total - 1) {
            var pi = new paginationItem_1.PaginationItem();
            pi.index = this.total - 1;
            pi.text = this.setting.lastText;
            pi.description = IPagination_1.paginationEnum.Last;
            this.items.push(pi);
        }
    }
    DoProcess() {
        this.first();
        this.preGroup();
        this.prePage();
        this.processItems();
        this.nextPage();
        this.nextGroup();
        this.last();
    }
}
exports.MiddlePagination = MiddlePagination;

//# sourceMappingURL=middlePagination.js.map
