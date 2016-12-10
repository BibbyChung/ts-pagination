import { PaginationItem } from './paginationItem';
import { PaginationSetting } from './paginationSetting';

export interface IPagination {
    //items: PaginationItem[];
    SetData(pagesize: number, current: number, total: number, itemsize: number);

    // setting: PaginationSetting;

    // total: number;
    // CurrentIndex: number;
    // MaxPagerItems: number;
    // TotalDataItemCount: number;
    // MaxDataItems: number;
    // LastNumber: number;
    // FirstNumber: number;

    // /// <summary>
    // /// ���L���T
    // /// </summary>
    // InfoObj: any;
    // Action: number;
    // Controller: number;
}

export enum paginationEnum {
    Number,
    First,
    Last,
    FirstGroup,
    LastGroup,
    Previous,
    Next
}
