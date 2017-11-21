
export class PagerItem {
  index: number;
  text: string;
  type: PagerEnum;
  isCurrent: boolean;
  isEnabled: boolean;
}

export enum PagerEnum {
  Number = 0,
  First = 1,
  Last = 2,
  PreGroup = 3,
  NextGroup = 4,
  Previous = 5,
  Next = 6,
}
