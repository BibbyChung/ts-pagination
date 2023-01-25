import { IPagination } from './IPagination';
import { PagerItem } from './pagerItem';
import { PaginationSetting } from './paginationSetting';
export declare abstract class PaginationBase implements IPagination {
    pagerItemSize: number;
    currentIndex: number;
    dataTotal: number;
    dataSize: number;
    protected _items: PagerItem[];
    get items(): PagerItem[];
    private _setting;
    get setting(): PaginationSetting;
    set setting(v: PaginationSetting);
    get total(): number;
    constructor(pagerItemSize: number, currentIndex: number, dataTotal: number, dataSize: number);
    protected getDefaultPagerItem(): PagerItem;
    protected abstract first(): any;
    protected abstract preGroup(): any;
    protected abstract preItem(): any;
    protected abstract processItems(): any;
    protected abstract nextItem(): any;
    protected abstract nextGroup(): any;
    protected abstract last(): any;
    protected setup(): void;
}
