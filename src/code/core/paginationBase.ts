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

    }

    private setTotal() {

        this.total = Math.ceil(this.dataCount / this.pageSize);

    }


    private setDefaultSetting() {

        let ps = new PaginationSetting();
        ps.firstText = "first"; //"<<<"
        ps.lastText = "last"; //">>>"
        ps.preGroupText = "&lt;&lt;"; //"<<"
        ps.nextGroupText = "&gt;&gt;"; //">>"
        ps.PreText = "&lt;"; //"<"
        ps.nextText = "&gt;"; //">"        
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
