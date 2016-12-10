import { PagerItem } from './pager';
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

        let totalTmp = (this.dataCount / this.pageSize) + 1;
        if (this.dataCount % this.pageSize == 0)
            totalTmp--;

        this.total = totalTmp;

    }


    private setDefaultSetting() {

        let ps = new PaginationSetting();
        ps.firstText = "&lt;&lt;&lt;"; //"<<<"
        ps.lastText = "&gt;&gt;&gt;"; //">>>"
        ps.preGroupText = "&lt;&lt;"; //"<<"
        ps.nextGroupText = "&gt;&gt;"; //">>"
        ps.PreText = "&lt;"; //"<"
        ps.nextText = "&gt;"; //">"        
        ps.isShowFirstLastItem = true;
        ps.isShowPrevNextGroupItem = true;
        ps.isShowPrevNextItem = true;
        this.setting = ps;

    }

    abstract build();

}
