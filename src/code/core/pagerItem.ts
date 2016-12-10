
export class PagerItem {

    index: number;
    text: string;
    description: PagerEnum;
    isCurrent: boolean;
    isShow: boolean;

}

export enum PagerEnum {

    Number,
    First,
    Last,
    FirstGroup,
    LastGroup,
    Previous,
    Next

}