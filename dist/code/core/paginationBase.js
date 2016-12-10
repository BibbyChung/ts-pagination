"use strict";
const paginationSetting_1 = require('./paginationSetting');
class PaginationBase {
    constructor() {
        this.items = [];
        this.init();
    }
    init() {
        //default setting
        var ps = new paginationSetting_1.PaginationSetting();
        ps.firstText = "&lt;&lt;&lt;"; //"<<<"
        ps.lastText = "&gt;&gt;&gt;"; //">>>"
        ps.prevGroupText = "&lt;&lt;"; //"<<"
        ps.nextGroupText = "&gt;&gt;"; //">>"
        ps.PrevOneText = "&lt;"; //"<"
        ps.nextOneText = "&gt;"; //">"        
        ps.isShowFirstLastItem = true;
        ps.isShowPrevNextGroupItem = true;
        ps.isShowPrevNextItem = true;
        this.setting = ps;
    }
    get LastNumber() {
        return (this.current + 1) * this.itemSize < this.dataCount
            ? (this.current + 1) * this.itemSize
            : this.dataCount;
    }
    get FirstNumber() {
        return (this.current * 10) + 1;
    }
    SetData(itemSize, current, dataCount, pageSize) {
        this.current = current;
        this.itemSize = itemSize;
        this.dataCount = dataCount;
        this.pageSize = pageSize;
        var totalTmp = (dataCount / pageSize) + 1;
        if (dataCount % pageSize == 0)
            totalTmp--;
        this.total = totalTmp;
    }
}
exports.PaginationBase = PaginationBase;

//# sourceMappingURL=paginationBase.js.map
