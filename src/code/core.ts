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

export class PaginationSetting {
  firstText = "first";
  lastText = "last";
  preGroupText = "<<";
  nextGroupText = ">>";
  PreText = "<";
  nextText = ">";
  isShowFirstLastItem = true;
  isShowPrevNextGroupItem = true;
  isShowPrevNextItem = true;
}

export const getDefaultPaginationSetting = () => {
  return new PaginationSetting();
};
