"use strict";
const paginationBase_1 = require('./core/paginationBase');
const paginationItem_1 = require('./core/paginationItem');
const IPagination_1 = require('./core/IPagination');
class NormalPagination extends paginationBase_1.PaginationBase {
    ShowPagerNumber(currentIndex, maxPageItems, totalPages, page) {
        var count = Math.min(maxPageItems, totalPages - (page * maxPageItems));
        for (var i = 1; i <= count; i++) {
            var pi = new paginationItem_1.PaginationItem();
            pi.ItemPagerIndex = (page * maxPageItems) + i - 1;
            pi.ItemText = ((page * maxPageItems) + i).toString();
            pi.Description = IPagination_1.paginationEnum.Number;
            pi.IsCurrentIndex = pi.ItemPagerIndex == currentIndex;
            this.items.push(pi);
        }
    }
    FirstPage(currentPageIndex) {
        if (!this.setting.DisplayFirstLastPager)
            return;
        if (currentPageIndex != 0) {
            var pi = new paginationItem_1.PaginationItem();
            pi.ItemPagerIndex = 0;
            pi.ItemText = this.setting.FirstPagerText;
            pi.Description = IPagination_1.paginationEnum.First;
            this.items.push(pi);
        }
    }
    GroupNext(maxPageItems, totalPages, page) {
        if (!this.setting.DisplayPrevNextGroupPager)
            return;
        if (((page + 1) * maxPageItems) < totalPages) {
            var pi = new paginationItem_1.PaginationItem();
            pi.ItemPagerIndex = (page + 1) * maxPageItems;
            pi.ItemText = this.setting.NextGroupPagerText;
            pi.Description = IPagination_1.paginationEnum.LastGroup;
            this.items.push(pi);
        }
    }
    NextPage(currentPageIndex, totalPages) {
        if (!this.setting.DisplayPrevNextPager)
            return;
        var pi = new paginationItem_1.PaginationItem();
        pi.ItemPagerIndex = currentPageIndex + 1;
        pi.ItemText = this.setting.NextOnePagerText;
        pi.Description = IPagination_1.paginationEnum.Next;
        this.items.push(pi);
        if ((currentPageIndex + 1) == totalPages) {
            pi.IsDisable = true;
        }
    }
    PrePage(currentPageIndex) {
        if (!this.setting.DisplayPrevNextPager)
            return;
        var pi = new paginationItem_1.PaginationItem();
        pi.ItemPagerIndex = currentPageIndex - 1;
        pi.ItemText = this.setting.PrevOnePagerText;
        pi.Description = IPagination_1.paginationEnum.Previous;
        this.items.push(pi);
        if (currentPageIndex == 0) {
            pi.IsDisable = true;
        }
    }
    GroupPage(maxPageItems, page) {
        if (!this.setting.DisplayPrevNextGroupPager)
            return;
        if (page > 0) {
            var pi = new paginationItem_1.PaginationItem();
            pi.ItemPagerIndex = (page - 1) * maxPageItems;
            pi.ItemText = this.setting.PrevGroupPagerText;
            pi.Description = IPagination_1.paginationEnum.FirstGroup;
            this.items.push(pi);
        }
    }
    LastPage(currentPageIndex, totalPages) {
        if (!this.setting.DisplayFirstLastPager)
            return;
        if (currentPageIndex < totalPages - 1) {
            var pi = new paginationItem_1.PaginationItem();
            pi.ItemPagerIndex = totalPages - 1;
            pi.ItemText = this.setting.LastPagerText;
            pi.Description = IPagination_1.paginationEnum.Last;
            this.items.push(pi);
        }
    }
    DoProcess(maxPageItems, currentIndex, totalPageItems) {
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
exports.NormalPagination = NormalPagination;

//# sourceMappingURL=normalPagination.js.map
