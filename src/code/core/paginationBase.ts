import { PagerItem } from './pagerItem';
import { PaginationSetting } from './paginationSetting';

export abstract class PaginationBase {

    items: PagerItem[] = [];
    setting: PaginationSetting;
    total: number;

    constructor(
        public itemSize: number,
        public current: number,
        public dataCount: number,
        public pageSize: number
    ) {

        this.setDefaultSetting();
        this.setTotal();

        this.itemSize = parseInt(this.itemSize.toString());
        this.current = parseInt(this.current.toString());
        this.dataCount = parseInt(this.dataCount.toString());
        this.pageSize = parseInt(this.pageSize.toString());

    }

    private setTotal() {

        this.total = Math.ceil(this.dataCount / this.pageSize);

    }


    private setDefaultSetting() {

        let ps = new PaginationSetting();
        ps.firstText = "first";
        ps.lastText = "last";
        ps.preGroupText = "<<";
        ps.nextGroupText = ">>";
        ps.PreText = "<";
        ps.nextText = ">";
        ps.isShowFirstLastItem = true;
        ps.isShowPrevNextGroupItem = true;
        ps.isShowPrevNextItem = true;
        this.setting = ps;

    }

    getDefaultPagerItem() {

        let pi = new PagerItem();
        pi.isCurrent = false;
        pi.isEnabled = true;
        return pi;

    }

    abstract build();

}
