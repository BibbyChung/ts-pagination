import { paginationEnum } from './IPagination';

export class PaginationItem {

    index: number;
    text: string;
    description: paginationEnum;
    isCurrent: boolean;
    isDisabled: boolean;

}

