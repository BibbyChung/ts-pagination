import { IPageInput, IPagination, Pager, PaginationSetting } from "./core";

const getPagerGroupIndex = (currentPage: number, pagerSize: number) => {
  let p = Math.floor((currentPage + 1) / pagerSize);
  if ((currentPage + 1) % pagerSize === 0) {
    p -= 1;
  }
  return p;
};

const getPagerTotal = (total: number, size: number) => {
  return Math.ceil(total / size);
};

export const getSimplePagination = (
  info: IPageInput,
  pagerSize: number,
  setting: PaginationSetting
) => {
  const pagerGroupIndex = getPagerGroupIndex(info.currentPage, pagerSize);
  const pagerTotal = getPagerTotal(info.total, info.size);
  const pagerCount = Math.min(
    pagerSize,
    pagerTotal - pagerGroupIndex * pagerSize
  );

  const pages: Pager[] = [];

  // first
  const getFirst = () => {
    const pi = new Pager();
    pi.index = 0;
    pi.text = setting.firstText;
    pi.type = "First";
    pi.isEnabled = setting.isShowFirstLastItem && info.currentPage > 0;
    return pi;
  };
  pages.push(getFirst());

  // preGroup
  const getPreGroup = () => {
    const pi = new Pager();
    const index = (pagerGroupIndex - 1) * pagerSize;
    pi.index = index < 0 ? -1 : index;
    pi.text = setting.preGroupText;
    pi.type = "PreGroup";
    pi.isEnabled = setting.isShowPrevNextGroupItem && pagerGroupIndex > 0;
    return pi;
  };
  pages.push(getPreGroup());

  // preItem
  const getPreItem = () => {
    const pi = new Pager();
    const index = info.currentPage - 1;
    pi.index = index < 0 ? -1 : index;
    pi.text = setting.PreText;
    pi.type = "Previous";
    pi.isEnabled = setting.isShowPrevNextItem && info.currentPage > 0;
    return pi;
  };
  pages.push(getPreItem());

  // processItems
  for (let i = 1; i <= pagerCount; i += 1) {
    const pi = new Pager();
    const index = pagerGroupIndex * pagerSize + i - 1;
    pi.index = pi.index = index < 0 ? -1 : index;
    pi.text = (pagerGroupIndex * pagerSize + i).toString();
    pi.type = "Number";
    pi.isCurrent = pi.index === info.currentPage;
    pi.isEnabled = true;
    pages.push(pi);
  }

  // nextItem
  const getNextItem = () => {
    const pi = new Pager();
    const index = info.currentPage + 1;
    pi.index = index < 0 ? -1 : index;
    pi.text = setting.nextText;
    pi.type = "Next";
    pi.isEnabled =
      setting.isShowPrevNextItem && info.currentPage + 1 < pagerTotal;
    return pi;
  };
  pages.push(getNextItem());

  // nextGroup
  const getNextGroup = () => {
    const pi = new Pager();
    const index = (pagerGroupIndex + 1) * pagerSize;
    pi.index = index < 0 ? -1 : index;
    pi.text = setting.nextGroupText;
    pi.type = "NextGroup";
    pi.isEnabled =
      setting.isShowPrevNextGroupItem &&
      (pagerGroupIndex + 1) * pagerSize < pagerTotal;
    return pi;
  };
  pages.push(getNextGroup());

  // last
  const getLast = () => {
    const pi = new Pager();
    const index = pagerTotal - 1;
    pi.index = index < 0 ? -1 : index;
    pi.text = setting.lastText;
    pi.type = "Last";
    pi.isEnabled =
      setting.isShowFirstLastItem && info.currentPage + 1 < pagerTotal;
    return pi;
  };
  pages.push(getLast());

  return {
    data: pages,
    total: info.total,
    currentPage: info.currentPage,
    size: info.size,
  } as IPagination;
};

// const data = [
//   { id: "fb5ea67d-bc35-4be6-8993-88c2adb8b503", name: "bb0", age: 25 },
//   { id: "2fbdb2fb-1d97-4500-b765-ff93744e0d98", name: "bb1", age: 26 },
//   { id: "ba3024f3-2497-47e2-ae11-90556bc084dd", name: "bb2", age: 27 },
//   { id: "bdf07a1d-2d95-4475-9f71-299357c5250f", name: "bb3", age: 28 },
//   { id: "cff6e164-7f8d-4956-9686-fdcd219d03e5", name: "bb4", age: 29 },
//   { id: "849eaeca-ba38-44fc-98f3-d7d0f9081278", name: "bb5", age: 210 },
// ];

// const pp1 = getSimplePagination(
//   {
//     currentPage: 3,
//     size: 1,
//     total: data.length,
//   },
//   2,
//   getDefaultPaginationSetting()
// );
// console.log(pp1);
