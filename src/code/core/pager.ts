
export class PagerItem {

    index: number;
    text: string;
    description: PagerEnum;
    isCurrent: boolean;
    isDisabled: boolean;

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