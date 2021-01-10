import { PagerEnum } from './core/pagerItem';
import { PaginationBase } from './core/paginationBase';

export class SimplePagination extends PaginationBase {

  constructor(
    pagerItemSize: number,
    currentIndex: number,
    dataTotal: number,
    dataSize: number,
  ) {
    super(
      pagerItemSize,
      currentIndex,
      dataTotal,
      dataSize,
    );
  }

  private first() {
    if (!this.setting.isShowFirstLastItem) {
      return;
    }

    if (this.currentIndex === 0) {
      return;
    }

    const pi = this.getDefaultPagerItem();
    pi.index = 0;
    pi.text = this.setting.firstText;
    pi.type = PagerEnum.First;
    this.items.push(pi);
  }

  private preGroup() {
    if (!this.setting.isShowPrevNextGroupItem) {
      return;
    }

    const p = this.getCurrentPagerStatus();
    if (p <= 0) {
      return;
    }

    const pi = this.getDefaultPagerItem();
    pi.index = (p - 1) * this.pagerItemSize;
    pi.text = this.setting.preGroupText;
    pi.type = PagerEnum.PreGroup;
    this.items.push(pi);
  }

  private preItem() {
    if (!this.setting.isShowPrevNextItem) {
      return;
    }

    const pi = this.getDefaultPagerItem();
    pi.index = this.currentIndex - 1;
    pi.text = this.setting.PreText;
    pi.type = PagerEnum.Previous;
    this.items.push(pi);

    if (this.currentIndex === 0) {
      pi.isEnabled = false;
    }
  }

  private processItems() {
    const p = this.getCurrentPagerStatus();
    const count = Math.min(this.pagerItemSize, this.total - (p * this.pagerItemSize));

    for (let i = 1; i <= count; i += 1) {
      const pi = this.getDefaultPagerItem();
      pi.index = (p * this.pagerItemSize) + i - 1;
      pi.text = ((p * this.pagerItemSize) + i).toString();
      pi.type = PagerEnum.Number;
      pi.isCurrent = pi.index === this.currentIndex;
      this.items.push(pi);
    }
  }

  private nextItem() {
    if (!this.setting.isShowPrevNextItem) {
      return;
    }

    const pi = this.getDefaultPagerItem();
    pi.index = this.currentIndex + 1;
    pi.text = this.setting.nextText;
    pi.type = PagerEnum.Next;
    this.items.push(pi);

    if (this.currentIndex + 1 === this.total) {
      pi.isEnabled = false;
    }
  }

  private nextGroup() {
    if (!this.setting.isShowPrevNextGroupItem) {
      return;
    }

    const p = this.getCurrentPagerStatus();

    if ((p + 1) * this.pagerItemSize >= this.total) {
      return;
    }

    const pi = this.getDefaultPagerItem();
    pi.index = (p + 1) * this.pagerItemSize;
    pi.text = this.setting.nextGroupText;
    pi.type = PagerEnum.NextGroup;
    this.items.push(pi);
  }

  private last() {
    if (!this.setting.isShowFirstLastItem) {
      return;
    }

    if (this.currentIndex + 1 >= this.total) {
      return;
    }

    const pi = this.getDefaultPagerItem();
    pi.index = this.total - 1;
    pi.text = this.setting.lastText;
    pi.type = PagerEnum.Last;
    this.items.push(pi);
  }

  private getCurrentPagerStatus() {
    let p = Math.floor((this.currentIndex + 1) / this.pagerItemSize);
    if (((this.currentIndex + 1) % this.pagerItemSize) === 0) {
      p -= 1;
    }
    return p;
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
