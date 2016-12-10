import { IPagination } from './IPagination';
import { PaginationItem } from './paginationItem';
import { PaginationSetting } from './paginationSetting';

export abstract class PaginationBase implements IPagination {

    items: PaginationItem[] = [];
    setting: PaginationSetting;

    current: number;
    itemSize: number;
    dataCount: number;
    pageSize: number;

    total: number;

    constructor() {

        this.init();

    }

    private init() {

        //default setting
        var ps = new PaginationSetting();
        ps.firstText = "&lt;&lt;&lt;"; //"<<<"
        ps.lastText = "&gt;&gt;&gt;"; //">>>"
        ps.prevGroupText = "&lt;&lt;"; //"<<"
        ps.nextGroupText = "&gt;&gt;"; //">>"
        ps.PrevOneText = "&lt;"; //"<"
        ps.nextOneText = "&gt;"; //">"        
        ps.isShowFirstLastItem = true;
        ps.isShowPrevNextGroupItem = true;
        ps.isShowPrevNextItem = true;
        this.setting = ps;

    }

    get LastNumber(): number {
        return (this.current + 1) * this.itemSize < this.dataCount
            ? (this.current + 1) * this.itemSize
            : this.dataCount;
    }

    get FirstNumber(): number {
        return (this.current * 10) + 1;
    }


    SetData(itemSize: number, current: number, dataCount: number, pageSize: number) {
        
        this.current = current;
        this.itemSize = itemSize;
        this.dataCount = dataCount;
        this.pageSize = pageSize;

        var totalTmp = (dataCount / pageSize) + 1;
        if (dataCount % pageSize == 0)
            totalTmp--;

        this.total = totalTmp;

    }


}
