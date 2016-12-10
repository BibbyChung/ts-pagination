import { PaginationBase } from './core/paginationBase';
import { PaginationItem } from './core/paginationItem';
import { paginationEnum } from './core/IPagination';

export class MiddlePagination extends PaginationBase {
    Range: number = 4;

    private ShowPagerNumber(currentIndex: number, maxPageItems: number, currentPageIndex: number, totalPages: number, page: number) {

        var rightNumber = totalPages - (currentPageIndex + 1);
        if (rightNumber > this.Range) {
            rightNumber = this.Range;
        }
        var max = currentPageIndex + rightNumber;

        if (currentPageIndex < maxPageItems - this.Range) {
            max = Math.min(totalPages - 1, maxPageItems - 1);
        }

        var min = Math.max(max - (maxPageItems - 1), 0);

        for (var i = min; i <= max; i++) {
            var pi = new PaginationItem();
            pi.ItemPagerIndex = i;
            pi.ItemText = (i + 1).toString();
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

        if ((currentPageIndex + 1) < totalPages) {
            var pi = new PaginationItem();
            pi.ItemPagerIndex = currentPageIndex + 1;
            pi.ItemText = this.setting.NextOnePagerText;
            pi.Description = paginationEnum.Next;
            this.items.push(pi);
        }
    }

    private PrePage(currentPageIndex: number) {
        if (!this.setting.DisplayPrevNextPager)
            return;

        if (currentPageIndex > 0) {
            var pi = new PaginationItem();
            pi.ItemPagerIndex = currentPageIndex - 1;
            pi.ItemText = this.setting.PrevOnePagerText;
            pi.Description = paginationEnum.Previous;
            this.items.push(pi);
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

    public DoProcess(maxPageItems: number, currentIndex: number, totalPages: number) {
        this.total = totalPages;

        var page = currentIndex / maxPageItems;

        this.FirstPage(currentIndex);

        this.GroupPage(maxPageItems, page);

        this.PrePage(currentIndex);

        this.ShowPagerNumber(currentIndex, maxPageItems, currentIndex, totalPages, page);

        this.NextPage(currentIndex, totalPages);

        this.GroupNext(maxPageItems, totalPages, page);

        this.LastPage(currentIndex, totalPages);
    }

}
