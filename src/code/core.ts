export interface IPageInput {
  /** the current page number, starting from 1 */
  currentPage: number;
  /** total number of results */
  total: number;
  /** number of items per page (default: 25) */
  size: number;
}

export interface IPagination {
  data: Pager[];
  /** the current page number, starting from 0 */
  currentPage: number;
  /** total number of results */
  total: number;
  /** number of items per page (default: 25) */
  size: number;
}

export class Pager {
  index: number;
  text: string;
  type:
    | "Number"
    | "First"
    | "Last"
    | "PreGroup"
    | "NextGroup"
    | "Previous"
    | "Next";
  isCurrent = false;
  isEnabled = true;
}

export type IDefaultPaginationSetting = {
  firstText: string;
  lastText: string;
  preGroupText: string;
  nextGroupText: string;
  PreText: string;
  nextText: string;
  isShowFirstLastItem: boolean;
  isShowPrevNextGroupItem: boolean;
  isShowPrevNextItem: boolean;
};

export const getDefaultPaginationSetting = (): IDefaultPaginationSetting => {
  return {
    firstText: "first",
    lastText: "last",
    preGroupText: "<<",
    nextGroupText: ">>",
    PreText: "<",
    nextText: ">",
    isShowFirstLastItem: true,
    isShowPrevNextGroupItem: true,
    isShowPrevNextItem: true,
  };
};

export const getPagerGroupIndex = (currentPage: number, pagerSize: number) => {
  let p = Math.floor((currentPage + 1) / pagerSize);
  if ((currentPage + 1) % pagerSize === 0) {
    p -= 1;
  }
  return p;
};

export const getPagerTotal = (total: number, size: number) => {
  return Math.ceil(total / size);
};
