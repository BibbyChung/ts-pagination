"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginationBase = void 0;
const pagerItem_1 = require("./pagerItem");
const paginationSetting_1 = require("./paginationSetting");
class PaginationBase {
    constructor(pagerItemSize, currentIndex, dataTotal, dataSize) {
        this.pagerItemSize = pagerItemSize;
        this.currentIndex = currentIndex;
        this.dataTotal = dataTotal;
        this.dataSize = dataSize;
        this.items = [];
        this.setDefaultSetting();
        this.setTotal();
        this.pagerItemSize = parseInt(this.pagerItemSize.toString(), 10);
        this.currentIndex = parseInt(this.currentIndex.toString(), 10);
        this.dataTotal = parseInt(this.dataTotal.toString(), 10);
        this.dataSize = parseInt(this.dataSize.toString(), 10);
    }
    setTotal() {
        this.total = Math.ceil(this.dataTotal / this.dataSize);
    }
    setDefaultSetting() {
        const ps = new paginationSetting_1.PaginationSetting();
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
        const pi = new pagerItem_1.PagerItem();
        pi.isCurrent = false;
        pi.isEnabled = true;
        return pi;
    }
}
exports.PaginationBase = PaginationBase;
//# sourceMappingURL=paginationBase.js.map