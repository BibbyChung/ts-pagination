import { PagerItem } from './pagerItem';
import { PaginationSetting } from './paginationSetting';
export declare abstract class PaginationBase {
    itemSize: number;
    current: number;
    dataCount: number;
    pageSize: number;
    items: PagerItem[];
    setting: PaginationSetting;
    total: number;
    constructor(itemSize: number, current: number, dataCount: number, pageSize: number);
    private setTotal();
    private setDefaultSetting();
    getDefaultPagerItem(): PagerItem;
    abstract build(): any;
}
