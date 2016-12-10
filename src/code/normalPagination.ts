import { PaginationBase } from './core/paginationBase';
import { PaginationItem } from './core/paginationItem';
import { paginationEnum } from './core/IPagination';

export class NormalPagination extends PaginationBase {

    constructor() {
        super();
    }

    private ShowPagerNumber(currentIndex: number, maxPageItems: number, totalPages: number, page: number) {
        var count = Math.min(maxPageItems, totalPages - (page * maxPageItems));
        for (var i = 1; i <= count; i++) {
            var pi = new PaginationItem();
            pi.index = (page * maxPageItems) + i - 1;
            pi.text = ((page * maxPageItems) + i).toString();
            pi.description = paginationEnum.Number;
            pi.isCurrent = pi.index == currentIndex;
            this.items.push(pi);
        }
    }

    private FirstPage(currentPageIndex: number) {
        if (!this.setting.isShowFirstLastItem)
            return;

        if (currentPageIndex != 0) {
            var pi = new PaginationItem();
            pi.index = 0;
            pi.text = this.setting.firstText;
            pi.description = paginationEnum.First;
            this.items.push(pi);
        }
    }

    private GroupNext(maxPageItems: number, totalPages: number, page: number) {
        if (!this.setting.isShowPrevNextGroupItem)
            return;

        if (((page + 1) * maxPageItems) < totalPages) {
            var pi = new PaginationItem();
            pi.index = (page + 1) * maxPageItems;
            pi.text = this.setting.nextGroupText;
            pi.description = paginationEnum.LastGroup;
            this.items.push(pi);
        }
    }

    private NextPage(currentPageIndex: number, totalPages: number) {
        if (!this.setting.isShowPrevNextItem)
            return;

        var pi = new PaginationItem();
        pi.index = currentPageIndex + 1;
        pi.text = this.setting.nextOneText;
        pi.description = paginationEnum.Next;
        this.items.push(pi);

        if ((currentPageIndex + 1) == totalPages) {
            pi.isDisabled = true;
        }
    }

    private PrePage(currentPageIndex: number) {
        if (!this.setting.isShowPrevNextItem)
            return;

        var pi = new PaginationItem();
        pi.index = currentPageIndex - 1;
        pi.text = this.setting.PrevOneText;
        pi.description = paginationEnum.Previous;
        this.items.push(pi);

        if (currentPageIndex == 0) {
            pi.isDisabled = true;
        }
    }

    private GroupPage(maxPageItems: number, page: number) {
        if (!this.setting.isShowPrevNextGroupItem)
            return;

        if (page > 0) {
            var pi = new PaginationItem();
            pi.index = (page - 1) * maxPageItems;
            pi.text = this.setting.prevGroupText;
            pi.description = paginationEnum.FirstGroup;
            this.items.push(pi);
        }
    }

    private LastPage(currentPageIndex: number, totalPages: number) {
        if (!this.setting.isShowFirstLastItem)
            return;

        if (currentPageIndex < totalPages - 1) {
            var pi = new PaginationItem();
            pi.index = totalPages - 1;
            pi.text = this.setting.lastText;
            pi.description = paginationEnum.Last;
            this.items.push(pi);
        }
    }

    DoProcess(maxPageItems: number, currentIndex: number, totalPageItems: number) {
        this.total = totalPageItems;

        var page = currentIndex / maxPageItems;

        //�P�_�O�_���Ĥ@��
        this.FirstPage(currentIndex);

        //�P�_�O�_���Wx��
        this.GroupPage(maxPageItems, page);

        //�P�_�O�_���W�@��
        this.PrePage(currentIndex);

        //���ܭ����Ʀr���X
        this.ShowPagerNumber(currentIndex, maxPageItems, totalPageItems, page);

        //�P�_�O�_���U�@��
        this.NextPage(currentIndex, totalPageItems);

        //�P�_�O�_���Ux��
        this.GroupNext(maxPageItems, totalPageItems, page);

        //�P�_�O�_���̫᭶
        this.LastPage(currentIndex, totalPageItems);
    }
}
