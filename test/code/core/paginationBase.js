"use strict";
const pagerItem_1 = require('./pagerItem');
const paginationSetting_1 = require('./paginationSetting');
class PaginationBase {
    constructor(itemSize, current, dataCount, pageSize) {
        this.itemSize = itemSize;
        this.current = current;
        this.dataCount = dataCount;
        this.pageSize = pageSize;
        this.items = [];
        this.setDefaultSetting();
        this.setTotal();
        this.itemSize = parseInt(this.itemSize.toString());
        this.current = parseInt(this.current.toString());
        this.dataCount = parseInt(this.dataCount.toString());
        this.pageSize = parseInt(this.pageSize.toString());
    }
    setTotal() {
        this.total = Math.ceil(this.dataCount / this.pageSize);
    }
    setDefaultSetting() {
        let ps = new paginationSetting_1.PaginationSetting();
        ps.firstText = "first";
        ps.lastText = "last";
        ps.preGroupText = "<<";
        ps.nextGroupText = ">>";
        ps.PreText = "<";
        ps.nextText = ">";
        ps.isShowFirstLastItem = true;
        ps.isShowPrevNextGroupItem = true;
        ps.isShowPrevNextItem = true;
        this.setting = ps;
    }
    getDefaultPagerItem() {
        let pi = new pagerItem_1.PagerItem();
        pi.isCurrent = false;
        pi.isEnabled = true;
        return pi;
    }
}
exports.PaginationBase = PaginationBase;
//# sourceMappingURL=paginationBase.js.map
