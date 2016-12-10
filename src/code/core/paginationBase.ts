import { IPagination } from './IPagination';
import { PaginationItem } from './paginationItem';
import { PaginationSetting } from './paginationSetting';

export class PaginationBase implements IPagination {

    items: PaginationItem[];
    setting: PaginationSetting;
    total: number;

    current: number;
    MaxPagerItems: number;
    TotalDataItemCount: number;
    MaxDataItems: number;

    Action: number;
    Controller: number;
    InfoObj: any;

    constructor() {
        this.items = [];

        var ps = new PaginationSetting();
        ps.FirstPagerText = "<<<"; //"&lt;&lt;&lt;",		//�Ĥ@��
        ps.LastPagerText = ">>>"; //"&gt;&gt;&gt;",		//�̥���
        ps.PrevGroupPagerText = "<<"; //"&lt;&lt;",//	//�e10��
        ps.NextGroupPagerText = ">>"; //"&gt;&gt;",//	//��10��
        ps.PrevOnePagerText = "<"; //"&lt;",//	//�W�@��
        ps.NextOnePagerText = ">"; //"&gt;",//	//�U�@��        
        ps.DisplayFirstLastPager = true; //�O�_���ܲĤ@���γ̥��������r,default=true
        ps.DisplayPrevNextGroupPager = true; //�O�_���ܫe10���Ϋ�10�������r,default=true
        ps.DisplayPrevNextPager = true; //�O�_���ܤW�@���ΤU�@�������r,default=true

        this.setting = ps;
    }

    get LastNumber(): number {
        return (this.current + 1) * this.MaxPagerItems < this.TotalDataItemCount
            ? (this.current + 1) * this.MaxPagerItems
            : this.TotalDataItemCount;
    }

    get FirstNumber(): number {
        return (this.current * 10) + 1;
    }


    SetData(maxPageItems: number, currentIndex: number, totalDataItems: number, maxDataItems: number) {
        this.current = currentIndex;
        this.MaxPagerItems = maxPageItems;
        this.TotalDataItemCount = totalDataItems;
        this.MaxDataItems = maxDataItems;

        //�`����
        var totalPages = (totalDataItems / maxDataItems) + 1;
        //�Y���㰣,page�ȭn��1
        if (totalDataItems % maxDataItems == 0)
            totalPages--;

        this.total = totalPages;
        this.DoProcess(maxPageItems, currentIndex, totalPages);
    }

    DoProcess(maxPageItems: number, currentIndex: number, totalPageItems: number): void {
        throw "please implement";
    }

}
