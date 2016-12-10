import { paginationEnum } from './IPagination';

export class PaginationItem {
    ItemPagerIndex: number;
    ItemText: string;
    Description: paginationEnum;
    IsCurrentIndex: boolean;
    IsDisable: boolean;
}

