import { PagerEnum, PagerItem } from './core/pagerItem';
import { PaginationBase } from './core/paginationBase';

export class MiddlePagination extends PaginationBase {

  range: number = 4;

  constructor(itemSize: number, current: number, dataCount: number, pageSize: number) {
    super(itemSize, current, dataCount, pageSize);
  }

  private processItems() {
    let rightNumber = this.total - (this.currentIndex + 1);
    if (rightNumber > this.range) {
      rightNumber = this.range;
    }

    let max = this.currentIndex + rightNumber;
    if (this.currentIndex < this.dataSize - this.range) {
      max = Math.min(this.total - 1, this.pagerSize - 1);
    }

    const min = Math.max(max - (this.pagerSize - 1), 0);

    for (let i = min; i <= max; i += 1) {
      const pi = new PagerItem();
      pi.index = i;
      pi.text = (i + 1).toString();
      pi.type = PagerEnum.Number;
      pi.isCurrent = pi.index === this.currentIndex;
      this.items.push(pi);
    }

  }

  private first() {

    if (!this.setting.isShowFirstLastItem) {
      return;
    }

    if (this.currentIndex !== 0) {
      const pi = this.getDefaultPagerItem();
      pi.index = 0;
      pi.text = this.setting.firstText;
      pi.type = PagerEnum.First;
      this.items.push(pi);
    }

  }

  private nextGroup() {
    if (!this.setting.isShowPrevNextGroupItem) {
      return;
    }

    const p = this.currentIndex / this.pagerSize;

    if (((p + 1) * this.pagerSize) < this.total) {
      const pi = this.getDefaultPagerItem();
      pi.index = (p + 1) * this.pagerSize;
      pi.text = this.setting.nextGroupText;
      pi.type = PagerEnum.NextGroup;
      this.items.push(pi);
    }
  }

  private nextItem() {
    if (!this.setting.isShowPrevNextItem) {
      return;
    }

    if ((this.currentIndex + 1) < this.total) {
      const pi = this.getDefaultPagerItem();
      pi.index = this.currentIndex + 1;
      pi.text = this.setting.nextText;
      pi.type = PagerEnum.Next;
      this.items.push(pi);
    }
  }

  private preItem() {
    if (!this.setting.isShowPrevNextItem) {
      return;
    }

    if (this.currentIndex > 0) {
      const pi = this.getDefaultPagerItem();
      pi.index = this.currentIndex - 1;
      pi.text = this.setting.PreText;
      pi.type = PagerEnum.Previous;
      this.items.push(pi);
    }
  }

  private preGroup() {
    if (!this.setting.isShowPrevNextGroupItem) {
      return;
    }

    const p = this.currentIndex / this.pagerSize;
    if (p > 0) {
      const pi = this.getDefaultPagerItem();
      pi.index = (p - 1) * this.pagerSize;
      pi.text = this.setting.preGroupText;
      pi.type = PagerEnum.PreGroup;
      this.items.push(pi);
    }
  }

  private last() {
    if (!this.setting.isShowFirstLastItem) {
      return;
    }

    if (this.currentIndex < this.total - 1) {
      const pi = this.getDefaultPagerItem();
      pi.index = this.total - 1;
      pi.text = this.setting.lastText;
      pi.type = PagerEnum.Last;
      this.items.push(pi);
    }
  }

  build() {
    this.first();
    this.preGroup();
    this.preItem();
    this.processItems();
    this.nextItem();
    this.nextGroup();
    this.last();
  }

}
