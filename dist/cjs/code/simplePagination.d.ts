import { PaginationBase } from './core/paginationBase';
export declare class SimplePagination extends PaginationBase {
    constructor(pagerItemSize: number, currentIndex: number, dataTotal: number, dataSize: number);
    private getCurrentPagerStatus;
    protected first(): void;
    protected preGroup(): void;
    protected preItem(): void;
    protected processItems(): void;
    protected nextItem(): void;
    protected nextGroup(): void;
    protected last(): void;
}
