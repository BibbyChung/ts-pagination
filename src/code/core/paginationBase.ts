import { IPagination } from './IPagination';
import { PagerItem } from './pagerItem';
import { PaginationSetting } from './paginationSetting';

export abstract class PaginationBase implements IPagination {

  protected _items: PagerItem[] = [];
  get items() {
    return this._items;
  }

  private _setting: PaginationSetting;
  get setting() {
    return this._setting;
  }
  set setting(v: PaginationSetting) {
    this._setting = v;
    this.setup();
  }

  get total() {
    return Math.ceil(this.dataTotal / this.dataSize);
  }

  constructor(
    public pagerItemSize: number,
    public currentIndex: number,
    public dataTotal: number,
    public dataSize: number,
  ) {
    this.pagerItemSize = parseInt(this.pagerItemSize.toString(), 10);
    this.currentIndex = parseInt(this.currentIndex.toString(), 10);
    this.dataTotal = parseInt(this.dataTotal.toString(), 10);
    this.dataSize = parseInt(this.dataSize.toString(), 10);

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

  protected getDefaultPagerItem() {
    const pi = new PagerItem();
    pi.isCurrent = false;
    pi.isEnabled = true;
    return pi;
  }

  protected abstract first();

  protected abstract preGroup();

  protected abstract preItem();

  protected abstract processItems();

  protected abstract nextItem();

  protected abstract nextGroup();

  protected abstract last();

  protected setup() {
    this.first();
    this.preGroup();
    this.preItem();
    this.processItems();
    this.nextItem();
    this.nextGroup();
    this.last();
  }

}
