import { PagerItem } from './pagerItem';
import { PaginationSetting } from './paginationSetting';

export abstract class PaginationBase {

  items: PagerItem[] = [];
  setting: PaginationSetting;
  total: number;

  constructor(
    public pagerItemSize: number,
    public currentIndex: number,
    public dataTotal: number,
    public dataSize: number,
  ) {
    this.setDefaultSetting();
    this.setTotal();

    this.pagerItemSize = parseInt(this.pagerItemSize.toString(), 10);
    this.currentIndex = parseInt(this.currentIndex.toString(), 10);
    this.dataTotal = parseInt(this.dataTotal.toString(), 10);
    this.dataSize = parseInt(this.dataSize.toString(), 10);
  }

  private setTotal() {
    this.total = Math.ceil(this.dataTotal / this.dataSize);
  }

  private setDefaultSetting() {
    const ps = new PaginationSetting();
    ps.firstText = 'first';
    ps.lastText = 'last';
    ps.preGroupText = '<<';
    ps.nextGroupText = '>>';
    ps.PreText = '<';
    ps.nextText = '>';
    ps.isShowFirstLastItem = true;
    ps.isShowPrevNextGroupItem = true;
    ps.isShowPrevNextItem = true;
    this.setting = ps;
  }

  getDefaultPagerItem() {
    const pi = new PagerItem();
    pi.isCurrent = false;
    pi.isEnabled = true;
    return pi;
  }

  abstract build();

}
