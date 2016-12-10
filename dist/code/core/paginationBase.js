"use strict";
const paginationSetting_1 = require('./paginationSetting');
class PaginationBase {
    constructor() {
        this.items = [];
        var ps = new paginationSetting_1.PaginationSetting();
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
    get LastNumber() {
        return (this.current + 1) * this.MaxPagerItems < this.TotalDataItemCount
            ? (this.current + 1) * this.MaxPagerItems
            : this.TotalDataItemCount;
    }
    get FirstNumber() {
        return (this.current * 10) + 1;
    }
    SetData(maxPageItems, currentIndex, totalDataItems, maxDataItems) {
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
    DoProcess(maxPageItems, currentIndex, totalPageItems) {
        throw "please implement";
    }
}
exports.PaginationBase = PaginationBase;

//# sourceMappingURL=paginationBase.js.map
