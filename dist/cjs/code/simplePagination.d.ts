import { PaginationBase } from './core/paginationBase';
export declare class SimplePagination extends PaginationBase {
    constructor(pagerItemSize: number, currentIndex: number, dataTotal: number, dataSize: number);
    private first;
    private preGroup;
    private preItem;
    private processItems;
    private nextItem;
    private nextGroup;
    private last;
    private getCurrentPagerStatus;
    build(): void;
}
