import { PaginationBase } from './core/paginationBase';
export declare class SimplePagination extends PaginationBase {
    constructor(itemSize: number, current: number, dataCount: number, pageSize: number);
    private first();
    private preGroup();
    private preItem();
    private processItems();
    private nextItem();
    private nextGroup();
    private last();
    private getCurrentPagerStatus();
    build(): void;
}
