import { PagerItem } from './pagerItem';
import { PaginationSetting } from './paginationSetting';
export class PaginationBase {
    get items() {
        return this._items;
    }
    get setting() {
        return this._setting;
    }
    set setting(v) {
        this._setting = v;
        this.setup();
    }
    get total() {
        return Math.ceil(this.dataTotal / this.dataSize);
    }
    constructor(pagerItemSize, currentIndex, dataTotal, dataSize) {
        this.pagerItemSize = pagerItemSize;
        this.currentIndex = currentIndex;
        this.dataTotal = dataTotal;
        this.dataSize = dataSize;
        this._items = [];
        this.pagerItemSize = parseInt(this.pagerItemSize.toString(), 10);
        this.currentIndex = parseInt(this.currentIndex.toString(), 10);
        this.dataTotal = parseInt(this.dataTotal.toString(), 10);
        this.dataSize = parseInt(this.dataSize.toString(), 10);
        const ps = new PaginationSetting();
        ps.firstText = 'first';
        ps.lastText = 'last';
        ps.preGroupText = '<<';
        ps.nextGroupText = '>>';
        ps.PreText = '<';
        ps.nextText = '>';
        ps.isShowFirstLastItem = true;
        ps.isShowPrevNextGroupItem = true;
        ps.isShowPrevNextItem = true;
        this.setting = ps;
    }
    getDefaultPagerItem() {
        const pi = new PagerItem();
        pi.isCurrent = false;
        pi.isEnabled = true;
        return pi;
    }
    setup() {
        this.first();
        this.preGroup();
        this.preItem();
        this.processItems();
        this.nextItem();
        this.nextGroup();
        this.last();
    }
}
//# sourceMappingURL=paginationBase.js.map