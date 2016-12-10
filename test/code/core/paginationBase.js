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
        let totalTmp = (this.dataCount / this.pageSize) + 1;
        if (this.dataCount % this.pageSize == 0)
            totalTmp--;
        this.total = totalTmp;
    }
    setDefaultSetting() {
        let ps = new paginationSetting_1.PaginationSetting();
        ps.firstText = "&lt;&lt;&lt;"; //"<<<"
        ps.lastText = "&gt;&gt;&gt;"; //">>>"
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
        pi.isShow = true;
        return pi;
    }
}
exports.PaginationBase = PaginationBase;
//# sourceMappingURL=paginationBase.js.map
