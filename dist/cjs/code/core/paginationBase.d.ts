import { IPagination } from './IPagination';
import { PagerItem } from './pagerItem';
import { PaginationSetting } from './paginationSetting';
export declare abstract class PaginationBase implements IPagination {
    pagerItemSize: number;
    currentIndex: number;
    dataTotal: number;
    dataSize: number;
    items: PagerItem[];
    setting: PaginationSetting;
    total: number;
    constructor(pagerItemSize: number, currentIndex: number, dataTotal: number, dataSize: number);
    private setTotal;
    private setDefaultSetting;
    getDefaultPagerItem(): PagerItem;
    abstract build(): any;
}
