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
    }
    setTotal() {
        this.total = Math.ceil(this.dataCount / this.pageSize);
    }
    setDefaultSetting() {
        let ps = new paginationSetting_1.PaginationSetting();
        ps.firstText = "first"; //"<<<"
        ps.lastText = "last"; //">>>"
        ps.preGroupText = "&lt;&lt;"; //"<<"
        ps.nextGroupText = "&gt;&gt;"; //">>"
        ps.PreText = "&lt;"; //"<"
        ps.nextText = "&gt;"; //">"        
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
