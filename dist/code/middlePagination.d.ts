import { PaginationBase } from './core/paginationBase';
export declare class MiddlePagination extends PaginationBase {
    range: number;
    constructor(itemSize: number, current: number, dataCount: number, pageSize: number);
    private processItems();
    private first();
    private nextGroup();
    private nextItem();
    private preItem();
    private preGroup();
    private last();
    build(): void;
}
