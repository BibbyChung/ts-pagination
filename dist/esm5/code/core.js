export class Pager {
    constructor() {
        this.isCurrent = false;
        this.isEnabled = true;
    }
}
export const getDefaultPaginationSetting = () => {
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
export const getPagerGroupIndex = (currentPage, pagerSize) => {
    let p = Math.floor((currentPage + 1) / pagerSize);
    if ((currentPage + 1) % pagerSize === 0) {
        p -= 1;
    }
    return p;
};
export const getPagerTotal = (total, size) => {
    return Math.ceil(total / size);
};
//# sourceMappingURL=core.js.map