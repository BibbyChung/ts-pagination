/// <reference path="./../../typings/index.d.ts" />


import * as assert from "assert";
import "./../extensions";
import { NormalPagination } from '../code/normalPagination';
import { PagerItem } from '../code/core/pagerItem';

let prepareToRun = (_self, tag: string) => {
    _self.Before({ tags: [tag] }, async (scenario: any) => {

    });
    _self.After({ tags: [tag] }, async (scenario) => {

    });
};

export = function () {

    prepareToRun(this, "@ud_G");

    var pageInfo: {
        itemSize: number,
        current: number,
        dataCount: number,
        pageSize: number
    };
    var pagination: NormalPagination;

    this.Given(/^ud_G ==> prepare the pagination data\.$/, function (table) {

        pageInfo = (table.hashes() as any[]).toConvertType()[0];

    });
    this.When(/^ud_G ==> prepare the normal pagination\.$/, function () {

        pagination = new NormalPagination(pageInfo.itemSize, pageInfo.current, pageInfo.dataCount, pageInfo.pageSize);
        pagination.build();

    });
    this.Then(/^ud_G ==> the page items should equal those data\.$/, function (table) {

        let expArr: PagerItem[] = (table.hashes() as any[]).toConvertType();
        let actArr = pagination.items;

        for (let i = 0; i < actArr.length; i++) {
            let exp = expArr[i];
            let act = actArr[i];

            assert.equal(act.type, exp.type);
            assert.equal(act.index, exp.index);
            assert.equal(act.isCurrent, exp.isCurrent);
            assert.equal(act.isEnabled, exp.isEnabled);
            assert.equal(act.text, exp.text);
        }

    });

    this.Then(/^ud_G ==> the pagination should equal those data\.$/, function (table) {

        let exp: {
            total: number,
            current: number
        } = (table.hashes() as any[]).toConvertType()[0];
        let act = pagination;

        assert.equal(act.total, exp.total);
        assert.equal(act.current, exp.current);

    });

}

