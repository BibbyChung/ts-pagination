import { PaginationBase } from './core/paginationBase';
import { PagerItem, PagerEnum } from './core/PagerItem';

export class NormalPagination extends PaginationBase {

    constructor(
        itemSize: number,
        current: number,
        dataCount: number,
        pageSize: number
    ) {
        super(itemSize, current, dataCount, pageSize);
    }

    private processItems() {

        let p = this.current / this.itemSize;
        let count = Math.min(this.itemSize, this.total - (p * this.itemSize));

        for (let i = 1; i <= count; i++) {
            let pi = this.getDefaultPagerItem();
            pi.index = (p * this.itemSize) + i - 1;
            pi.text = ((p * this.itemSize) + i).toString();
            pi.description = PagerEnum.Number;
            pi.isCurrent = pi.index == this.current;
            this.items.push(pi);
        }

    }

    private first() {

        if (!this.setting.isShowFirstLastItem)
            return;

        if (this.current != 0) {
            let pi = this.getDefaultPagerItem();
            pi.index = 0;
            pi.text = this.setting.firstText;
            pi.description = PagerEnum.First;
            this.items.push(pi);
        }

    }

    private nextGroup() {

        if (!this.setting.isShowPrevNextGroupItem)
            return;

        let p = this.current / this.itemSize;

        if (((p + 1) * this.itemSize) < this.total) {
            let pi = this.getDefaultPagerItem();
            pi.index = (p + 1) * this.itemSize;
            pi.text = this.setting.nextGroupText;
            pi.description = PagerEnum.LastGroup;
            this.items.push(pi);
        }

    }

    private nextItem() {

        if (!this.setting.isShowPrevNextItem)
            return;

        let pi = this.getDefaultPagerItem();
        pi.index = this.current + 1;
        pi.text = this.setting.nextText;
        pi.description = PagerEnum.Next;
        this.items.push(pi);

        if ((this.current + 1) == this.total) {
            pi.isShow = false;
        }

    }

    private preItem() {

        if (!this.setting.isShowPrevNextItem)
            return;

        let pi = this.getDefaultPagerItem();
        pi.index = this.current - 1;
        pi.text = this.setting.PreText;
        pi.description = PagerEnum.Previous;
        this.items.push(pi);

        if (this.current == 0) {
            pi.isShow = false;
        }

    }

    private preGroup() {

        if (!this.setting.isShowPrevNextGroupItem)
            return;

        let p = this.current / this.itemSize;

        if (p > 0) {
            let pi = this.getDefaultPagerItem();
            pi.index = (p - 1) * this.itemSize;
            pi.text = this.setting.preGroupText;
            pi.description = PagerEnum.FirstGroup;
            this.items.push(pi);
        }

    }

    private last() {

        if (!this.setting.isShowFirstLastItem)
            return;

        if (this.current < this.total - 1) {
            let pi = this.getDefaultPagerItem();
            pi.index = this.total - 1;
            pi.text = this.setting.lastText;
            pi.description = PagerEnum.Last;
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
