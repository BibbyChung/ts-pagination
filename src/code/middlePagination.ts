import { PagerEnum, PagerItem } from './core/pagerItem';
import { PaginationBase } from './core/paginationBase';

export class MiddlePagination extends PaginationBase {

  range: number = 4;

  constructor(itemSize: number, current: number, dataCount: number, pageSize: number) {
    super(itemSize, current, dataCount, pageSize);
  }

  protected processItems() {
    let rightNumber = this.total - (this.currentIndex + 1);
    if (rightNumber > this.range) {
      rightNumber = this.range;
    }

    let max = this.currentIndex + rightNumber;
    if (this.currentIndex < this.dataSize - this.range) {
      max = Math.min(this.total - 1, this.pagerItemSize - 1);
    }

    const min = Math.max(max - (this.pagerItemSize - 1), 0);

    for (let i = min; i <= max; i += 1) {
      const pi = new PagerItem();
      pi.index = i;
      pi.text = (i + 1).toString();
      pi.type = PagerEnum.Number;
      pi.isCurrent = pi.index === this.currentIndex;
      this._items.push(pi);
    }
  }

  protected first() {
    if (!this.setting.isShowFirstLastItem) {
      return;
    }

    if (this.currentIndex !== 0) {
      const pi = this.getDefaultPagerItem();
      pi.index = 0;
      pi.text = this.setting.firstText;
      pi.type = PagerEnum.First;
      this._items.push(pi);
    }
  }

  protected nextGroup() {
    if (!this.setting.isShowPrevNextGroupItem) {
      return;
    }

    const p = this.currentIndex / this.pagerItemSize;

    if (((p + 1) * this.pagerItemSize) < this.total) {
      const pi = this.getDefaultPagerItem();
      pi.index = (p + 1) * this.pagerItemSize;
      pi.text = this.setting.nextGroupText;
      pi.type = PagerEnum.NextGroup;
      this._items.push(pi);
    }
  }

  protected nextItem() {
    if (!this.setting.isShowPrevNextItem) {
      return;
    }

    if ((this.currentIndex + 1) < this.total) {
      const pi = this.getDefaultPagerItem();
      pi.index = this.currentIndex + 1;
      pi.text = this.setting.nextText;
      pi.type = PagerEnum.Next;
      this._items.push(pi);
    }
  }

  protected preItem() {
    if (!this.setting.isShowPrevNextItem) {
      return;
    }

    if (this.currentIndex > 0) {
      const pi = this.getDefaultPagerItem();
      pi.index = this.currentIndex - 1;
      pi.text = this.setting.PreText;
      pi.type = PagerEnum.Previous;
      this._items.push(pi);
    }
  }

  protected preGroup() {
    if (!this.setting.isShowPrevNextGroupItem) {
      return;
    }

    const p = this.currentIndex / this.pagerItemSize;
    if (p > 0) {
      const pi = this.getDefaultPagerItem();
      pi.index = (p - 1) * this.pagerItemSize;
      pi.text = this.setting.preGroupText;
      pi.type = PagerEnum.PreGroup;
      this._items.push(pi);
    }
  }

  protected last() {
    if (!this.setting.isShowFirstLastItem) {
      return;
    }

    if (this.currentIndex < this.total - 1) {
      const pi = this.getDefaultPagerItem();
      pi.index = this.total - 1;
      pi.text = this.setting.lastText;
      pi.type = PagerEnum.Last;
      this._items.push(pi);
    }
  }

}
