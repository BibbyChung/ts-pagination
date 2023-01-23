import { getDefaultPaginationSetting, getPagerGroupIndex, getPagerTotal, Pager, } from "./core";
export const getSimplePagination = (info, pagerSize, setting) => {
    const pagerGroupIndex = getPagerGroupIndex(info.currentPage, pagerSize);
    const pagerTotal = getPagerTotal(info.total, info.size);
    const pagerCount = Math.min(pagerSize, pagerTotal - pagerGroupIndex * pagerSize);
    let finalSetting = getDefaultPaginationSetting();
    if (setting) {
        finalSetting = Object.assign(Object.assign({}, finalSetting), setting);
    }
    const pages = [];
    const getFirst = () => {
        const pi = new Pager();
        pi.index = 0;
        pi.text = finalSetting.firstText;
        pi.type = "First";
        pi.isEnabled = finalSetting.isShowFirstLastItem && info.currentPage > 0;
        return pi;
    };
    pages.push(getFirst());
    const getPreGroup = () => {
        const pi = new Pager();
        const index = (pagerGroupIndex - 1) * pagerSize;
        pi.index = index < 0 ? -1 : index;
        pi.text = finalSetting.preGroupText;
        pi.type = "PreGroup";
        pi.isEnabled = finalSetting.isShowPrevNextGroupItem && pagerGroupIndex > 0;
        return pi;
    };
    pages.push(getPreGroup());
    const getPreItem = () => {
        const pi = new Pager();
        const index = info.currentPage - 1;
        pi.index = index < 0 ? -1 : index;
        pi.text = finalSetting.PreText;
        pi.type = "Previous";
        pi.isEnabled = finalSetting.isShowPrevNextItem && info.currentPage > 0;
        return pi;
    };
    pages.push(getPreItem());
    for (let i = 1; i <= pagerCount; i += 1) {
        const pi = new Pager();
        const index = pagerGroupIndex * pagerSize + i - 1;
        pi.index = pi.index = index < 0 ? -1 : index;
        pi.text = (pagerGroupIndex * pagerSize + i).toString();
        pi.type = "Number";
        pi.isCurrent = pi.index === info.currentPage;
        pi.isEnabled = true;
        pages.push(pi);
    }
    const getNextItem = () => {
        const pi = new Pager();
        const index = info.currentPage + 1;
        pi.index = index < 0 || index >= pagerTotal ? -1 : index;
        pi.text = finalSetting.nextText;
        pi.type = "Next";
        pi.isEnabled =
            finalSetting.isShowPrevNextItem && info.currentPage + 1 < pagerTotal;
        return pi;
    };
    pages.push(getNextItem());
    const getNextGroup = () => {
        const pi = new Pager();
        const index = (pagerGroupIndex + 1) * pagerSize;
        pi.index = index < 0 || index >= pagerTotal ? -1 : index;
        pi.text = finalSetting.nextGroupText;
        pi.type = "NextGroup";
        pi.isEnabled =
            finalSetting.isShowPrevNextGroupItem &&
                (pagerGroupIndex + 1) * pagerSize < pagerTotal;
        return pi;
    };
    pages.push(getNextGroup());
    const getLast = () => {
        const pi = new Pager();
        const index = pagerTotal - 1;
        pi.index = index < 0 || index <= info.currentPage ? -1 : index;
        pi.text = finalSetting.lastText;
        pi.type = "Last";
        pi.isEnabled =
            finalSetting.isShowFirstLastItem && info.currentPage + 1 < pagerTotal;
        return pi;
    };
    pages.push(getLast());
    return {
        data: pages,
        total: info.total,
        currentPage: info.currentPage,
        size: info.size,
    };
};
//# sourceMappingURL=getSimplePagination.js.map