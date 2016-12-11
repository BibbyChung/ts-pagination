"use strict";
const paginationBase_1 = require('./core/paginationBase');
const PagerItem_1 = require('./core/PagerItem');
class NormalPagination extends paginationBase_1.PaginationBase {
    constructor(itemSize, current, dataCount, pageSize) {
        super(itemSize, current, dataCount, pageSize);
    }
    first() {
        if (!this.setting.isShowFirstLastItem)
            return;
        if (this.current == 0)
            return;
        let pi = this.getDefaultPagerItem();
        pi.index = 0;
        pi.text = this.setting.firstText;
        pi.type = PagerItem_1.PagerEnum.First;
        this.items.push(pi);
    }
    preGroup() {
        if (!this.setting.isShowPrevNextGroupItem)
            return;
        let p = this.getCurrentPagerStatus();
        if (p <= 0)
            return;
        let pi = this.getDefaultPagerItem();
        pi.index = (p - 1) * this.itemSize;
        pi.text = this.setting.preGroupText;
        pi.type = PagerItem_1.PagerEnum.PreGroup;
        this.items.push(pi);
    }
    preItem() {
        if (!this.setting.isShowPrevNextItem)
            return;
        let pi = this.getDefaultPagerItem();
        pi.index = this.current - 1;
        pi.text = this.setting.PreText;
        pi.type = PagerItem_1.PagerEnum.Previous;
        this.items.push(pi);
        if (this.current == 0) {
            pi.isEnabled = false;
        }
    }
    processItems() {
        let p = this.getCurrentPagerStatus();
        let count = Math.min(this.itemSize, this.total - (p * this.itemSize));
        for (let i = 1; i <= count; i++) {
            let pi = this.getDefaultPagerItem();
            pi.index = (p * this.itemSize) + i - 1;
            pi.text = ((p * this.itemSize) + i).toString();
            pi.type = PagerItem_1.PagerEnum.Number;
            pi.isCurrent = pi.index == this.current;
            this.items.push(pi);
        }
    }
    nextItem() {
        if (!this.setting.isShowPrevNextItem)
            return;
        let pi = this.getDefaultPagerItem();
        pi.index = this.current + 1;
        pi.text = this.setting.nextText;
        pi.type = PagerItem_1.PagerEnum.Next;
        this.items.push(pi);
        if (this.current + 1 == this.total) {
            pi.isEnabled = false;
        }
    }
    nextGroup() {
        if (!this.setting.isShowPrevNextGroupItem)
            return;
        let p = this.getCurrentPagerStatus();
        if ((p + 1) * this.itemSize >= this.total)
            return;
        let pi = this.getDefaultPagerItem();
        pi.index = (p + 1) * this.itemSize;
        pi.text = this.setting.nextGroupText;
        pi.type = PagerItem_1.PagerEnum.NextGroup;
        this.items.push(pi);
    }
    last() {
        if (!this.setting.isShowFirstLastItem)
            return;
        if (this.current + 1 >= this.total)
            return;
        let pi = this.getDefaultPagerItem();
        pi.index = this.total - 1;
        pi.text = this.setting.lastText;
        pi.type = PagerItem_1.PagerEnum.Last;
        this.items.push(pi);
    }
    getCurrentPagerStatus() {
        let p = Math.floor((this.current + 1) / this.itemSize);
        if (((this.current + 1) % this.itemSize) == 0)
            p--;
        return p;
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
