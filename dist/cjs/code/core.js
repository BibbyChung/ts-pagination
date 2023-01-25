"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPagerTotal = exports.getPagerGroupIndex = exports.getDefaultPaginationSetting = exports.Pager = void 0;
class Pager {
    constructor() {
        this.isCurrent = false;
        this.isEnabled = true;
    }
}
exports.Pager = Pager;
const getDefaultPaginationSetting = () => {
    return {
        firstText: "first",
        lastText: "last",
        preGroupText: "<<",
        nextGroupText: ">>",
        PreText: "<",
        nextText: ">",
        isShowFirstLastItem: true,
        isShowPrevNextGroupItem: true,
        isShowPrevNextItem: true,
    };
};
exports.getDefaultPaginationSetting = getDefaultPaginationSetting;
const getPagerGroupIndex = (currentPage, pagerSize) => {
    let p = Math.floor((currentPage + 1) / pagerSize);
    if ((currentPage + 1) % pagerSize === 0) {
        p -= 1;
    }
    return p;
};
exports.getPagerGroupIndex = getPagerGroupIndex;
const getPagerTotal = (total, size) => {
    return Math.ceil(total / size);
};
exports.getPagerTotal = getPagerTotal;
//# sourceMappingURL=core.js.map