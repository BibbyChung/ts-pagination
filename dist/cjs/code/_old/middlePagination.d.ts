import { PaginationBase } from './core/paginationBase';
export declare class MiddlePagination extends PaginationBase {
    range: number;
    constructor(itemSize: number, current: number, dataCount: number, pageSize: number);
    protected processItems(): void;
    protected first(): void;
    protected nextGroup(): void;
    protected nextItem(): void;
    protected preItem(): void;
    protected preGroup(): void;
    protected last(): void;
}
