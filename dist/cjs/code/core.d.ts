export interface IPageInput {
    currentPage: number;
    total: number;
    size: number;
}
export interface IPagination {
    data: Pager[];
    currentPage: number;
    total: number;
    size: number;
}
export declare class Pager {
    index: number;
    text: string;
    type: "Number" | "First" | "Last" | "PreGroup" | "NextGroup" | "Previous" | "Next";
    isCurrent: boolean;
    isEnabled: boolean;
}
export type IDefaultPaginationSetting = {
    firstText: string;
    lastText: string;
    preGroupText: string;
    nextGroupText: string;
    PreText: string;
    nextText: string;
    isShowFirstLastItem: boolean;
    isShowPrevNextGroupItem: boolean;
    isShowPrevNextItem: boolean;
};
export declare const getDefaultPaginationSetting: () => IDefaultPaginationSetting;
export declare const getPagerGroupIndex: (currentPage: number, pagerSize: number) => number;
export declare const getPagerTotal: (total: number, size: number) => number;
