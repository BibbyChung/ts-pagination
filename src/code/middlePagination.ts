import { PaginationBase } from './core/paginationBase';
import { PaginationItem } from './core/paginationItem';
import { paginationEnum } from './core/IPagination';

export class MiddlePagination extends PaginationBase {

    range: number = 4;

    constructor() {
        super();
    }

    private processItems() {

        var rightNumber = this.total - (this.current + 1);
        if (rightNumber > this.range) {
            rightNumber = this.range;
        }

        var max = this.current + rightNumber;
        if (this.current < this.pageSize - this.range) {
            max = Math.min(this.total - 1, this.itemSize - 1);
        }

        var min = Math.max(max - (this.itemSize - 1), 0);

        for (var i = min; i <= max; i++) {
            var pi = new PaginationItem();
            pi.index = i;
            pi.text = (i + 1).toString();
            pi.description = paginationEnum.Number;
            pi.isCurrent = pi.index == this.current;
            this.items.push(pi);
        }

    }

    private first() {

        if (!this.setting.isShowFirstLastItem)
            return;

        if (this.current != 0) {
            var pi = new PaginationItem();
            pi.index = 0;
            pi.text = this.setting.firstText;
            pi.description = paginationEnum.First;
            this.items.push(pi);
        }

    }

    private nextGroup() {

        if (!this.setting.isShowPrevNextGroupItem)
            return;

        var p = this.current / this.itemSize;

        if (((p + 1) * this.itemSize) < this.total) {
            var pi = new PaginationItem();
            pi.index = (p + 1) * this.itemSize;
            pi.text = this.setting.nextGroupText;
            pi.description = paginationEnum.LastGroup;
            this.items.push(pi);
        }

    }

    private nextPage() {

        if (!this.setting.isShowPrevNextItem)
            return;

        if ((this.current + 1) < this.total) {
            var pi = new PaginationItem();
            pi.index = this.current + 1;
            pi.text = this.setting.nextOneText;
            pi.description = paginationEnum.Next;
            this.items.push(pi);
        }

    }

    private prePage() {

        if (!this.setting.isShowPrevNextItem)
            return;

        if (this.current > 0) {
            var pi = new PaginationItem();
            pi.index = this.current - 1;
            pi.text = this.setting.PrevOneText;
            pi.description = paginationEnum.Previous;
            this.items.push(pi);
        }
        
    }

    private preGroup() {

        if (!this.setting.isShowPrevNextGroupItem)
            return;

        var p = this.current / this.itemSize;
        if (p > 0) {
            var pi = new PaginationItem();
            pi.index = (p - 1) * this.itemSize;
            pi.text = this.setting.prevGroupText;
            pi.description = paginationEnum.FirstGroup;
            this.items.push(pi);
        }

    }

    private last() {

        if (!this.setting.isShowFirstLastItem)
            return;

        if (this.current < this.total - 1) {
            var pi = new PaginationItem();
            pi.index = this.total - 1;
            pi.text = this.setting.lastText;
            pi.description = paginationEnum.Last;
            this.items.push(pi);
        }

    }

    public DoProcess() {

        this.first();
        this.preGroup();
        this.prePage();
        this.processItems();
        this.nextPage();
        this.nextGroup();
        this.last();

    }

}
