import { PagerEnum } from './core/pagerItem';
import { PaginationBase } from './core/paginationBase';
export class SimplePagination extends PaginationBase {
    constructor(pagerItemSize, currentIndex, dataTotal, dataSize) {
        super(pagerItemSize, currentIndex, dataTotal, dataSize);
    }
    getCurrentPagerStatus() {
        let p = Math.floor((this.currentIndex + 1) / this.pagerItemSize);
        if (((this.currentIndex + 1) % this.pagerItemSize) === 0) {
            p -= 1;
        }
        return p;
    }
    first() {
        if (!this.setting.isShowFirstLastItem) {
            return;
        }
        if (this.currentIndex === 0) {
            return;
        }
        const pi = this.getDefaultPagerItem();
        pi.index = 0;
        pi.text = this.setting.firstText;
        pi.type = PagerEnum.First;
        this._items.push(pi);
    }
    preGroup() {
        if (!this.setting.isShowPrevNextGroupItem) {
            return;
        }
        const p = this.getCurrentPagerStatus();
        if (p <= 0) {
            return;
        }
        const pi = this.getDefaultPagerItem();
        pi.index = (p - 1) * this.pagerItemSize;
        pi.text = this.setting.preGroupText;
        pi.type = PagerEnum.PreGroup;
        this._items.push(pi);
    }
    preItem() {
        if (!this.setting.isShowPrevNextItem) {
            return;
        }
        const pi = this.getDefaultPagerItem();
        pi.index = this.currentIndex - 1;
        pi.text = this.setting.PreText;
        pi.type = PagerEnum.Previous;
        this._items.push(pi);
        if (this.currentIndex === 0) {
            pi.isEnabled = false;
        }
    }
    processItems() {
        const p = this.getCurrentPagerStatus();
        const count = Math.min(this.pagerItemSize, this.total - (p * this.pagerItemSize));
        for (let i = 1; i <= count; i += 1) {
            const pi = this.getDefaultPagerItem();
            pi.index = (p * this.pagerItemSize) + i - 1;
            pi.text = ((p * this.pagerItemSize) + i).toString();
            pi.type = PagerEnum.Number;
            pi.isCurrent = pi.index === this.currentIndex;
            this._items.push(pi);
        }
    }
    nextItem() {
        if (!this.setting.isShowPrevNextItem) {
            return;
        }
        const pi = this.getDefaultPagerItem();
        pi.index = this.currentIndex + 1;
        pi.text = this.setting.nextText;
        pi.type = PagerEnum.Next;
        this._items.push(pi);
        if (this.currentIndex + 1 === this.total) {
            pi.isEnabled = false;
        }
    }
    nextGroup() {
        if (!this.setting.isShowPrevNextGroupItem) {
            return;
        }
        const p = this.getCurrentPagerStatus();
        if ((p + 1) * this.pagerItemSize >= this.total) {
            return;
        }
        const pi = this.getDefaultPagerItem();
        pi.index = (p + 1) * this.pagerItemSize;
        pi.text = this.setting.nextGroupText;
        pi.type = PagerEnum.NextGroup;
        this._items.push(pi);
    }
    last() {
        if (!this.setting.isShowFirstLastItem) {
            return;
        }
        if (this.currentIndex + 1 >= this.total) {
            return;
        }
        const pi = this.getDefaultPagerItem();
        pi.index = this.total - 1;
        pi.text = this.setting.lastText;
        pi.type = PagerEnum.Last;
        this._items.push(pi);
    }
}
//# sourceMappingURL=simplePagination.js.map