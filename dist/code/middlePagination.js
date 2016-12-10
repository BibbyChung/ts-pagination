"use strict";
const paginationBase_1 = require('./core/paginationBase');
const paginationItem_1 = require('./core/paginationItem');
const IPagination_1 = require('./core/IPagination');
class MiddlePagination extends paginationBase_1.PaginationBase {
    constructor(...args) {
        super(...args);
        this.Range = 4;
    }
    ShowPagerNumber(currentIndex, maxPageItems, currentPageIndex, totalPages, page) {
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
            var pi = new paginationItem_1.PaginationItem();
            pi.ItemPagerIndex = i;
            pi.ItemText = (i + 1).toString();
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
        if ((currentPageIndex + 1) < totalPages) {
            var pi = new paginationItem_1.PaginationItem();
            pi.ItemPagerIndex = currentPageIndex + 1;
            pi.ItemText = this.setting.NextOnePagerText;
            pi.Description = IPagination_1.paginationEnum.Next;
            this.items.push(pi);
        }
    }
    PrePage(currentPageIndex) {
        if (!this.setting.DisplayPrevNextPager)
            return;
        if (currentPageIndex > 0) {
            var pi = new paginationItem_1.PaginationItem();
            pi.ItemPagerIndex = currentPageIndex - 1;
            pi.ItemText = this.setting.PrevOnePagerText;
            pi.Description = IPagination_1.paginationEnum.Previous;
            this.items.push(pi);
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
    DoProcess(maxPageItems, currentIndex, totalPages) {
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
exports.MiddlePagination = MiddlePagination;

//# sourceMappingURL=middlePagination.js.map
