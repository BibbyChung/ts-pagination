import { PaginationBase } from './core/paginationBase';
import { PaginationItem } from './core/paginationItem';
import { paginationEnum } from './core/IPagination';

export class NormalPagination extends PaginationBase {
    private ShowPagerNumber(currentIndex: number, maxPageItems: number, totalPages: number, page: number) {
        var count = Math.min(maxPageItems, totalPages - (page * maxPageItems));
        for (var i = 1; i <= count; i++) {
            var pi = new PaginationItem();
            pi.ItemPagerIndex = (page * maxPageItems) + i - 1;
            pi.ItemText = ((page * maxPageItems) + i).toString();
            pi.Description = paginationEnum.Number;
            pi.IsCurrentIndex = pi.ItemPagerIndex == currentIndex;
            this.items.push(pi);
        }
    }

    private FirstPage(currentPageIndex: number) {
        if (!this.setting.DisplayFirstLastPager)
            return;

        if (currentPageIndex != 0) {
            var pi = new PaginationItem();
            pi.ItemPagerIndex = 0;
            pi.ItemText = this.setting.FirstPagerText;
            pi.Description = paginationEnum.First;
            this.items.push(pi);
        }
    }

    private GroupNext(maxPageItems: number, totalPages: number, page: number) {
        if (!this.setting.DisplayPrevNextGroupPager)
            return;

        if (((page + 1) * maxPageItems) < totalPages) {
            var pi = new PaginationItem();
            pi.ItemPagerIndex = (page + 1) * maxPageItems;
            pi.ItemText = this.setting.NextGroupPagerText;
            pi.Description = paginationEnum.LastGroup;
            this.items.push(pi);
        }
    }

    private NextPage(currentPageIndex: number, totalPages: number) {
        if (!this.setting.DisplayPrevNextPager)
            return;

        var pi = new PaginationItem();
        pi.ItemPagerIndex = currentPageIndex + 1;
        pi.ItemText = this.setting.NextOnePagerText;
        pi.Description = paginationEnum.Next;
        this.items.push(pi);

        if ((currentPageIndex + 1) == totalPages) {
            pi.IsDisable = true;
        }
    }

    private PrePage(currentPageIndex: number) {
        if (!this.setting.DisplayPrevNextPager)
            return;

        var pi = new PaginationItem();
        pi.ItemPagerIndex = currentPageIndex - 1;
        pi.ItemText = this.setting.PrevOnePagerText;
        pi.Description = paginationEnum.Previous;
        this.items.push(pi);

        if (currentPageIndex == 0) {
            pi.IsDisable = true;
        }
    }

    private GroupPage(maxPageItems: number, page: number) {
        if (!this.setting.DisplayPrevNextGroupPager)
            return;

        if (page > 0) {
            var pi = new PaginationItem();
            pi.ItemPagerIndex = (page - 1) * maxPageItems;
            pi.ItemText = this.setting.PrevGroupPagerText;
            pi.Description = paginationEnum.FirstGroup;
            this.items.push(pi);
        }
    }

    private LastPage(currentPageIndex: number, totalPages: number) {
        if (!this.setting.DisplayFirstLastPager)
            return;

        if (currentPageIndex < totalPages - 1) {
            var pi = new PaginationItem();
            pi.ItemPagerIndex = totalPages - 1;
            pi.ItemText = this.setting.LastPagerText;
            pi.Description = paginationEnum.Last;
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
