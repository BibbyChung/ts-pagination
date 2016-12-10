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

    this.Given(/^ud_G ==> prepare the data\.$/, function (table) {

        pageInfo = (table.hashes() as any[]).toConvertType()[0];

    });
    this.When(/^ud_G ==> intial the normal pagination\.$/, function () {

        pagination = new NormalPagination(pageInfo.itemSize, pageInfo.current, pageInfo.dataCount, pageInfo.pageSize);
        pagination.build();

    });
    this.Then(/^ud_G ==> the result should equal those data\.$/, function (table) {

        let exp: PagerItem = (table.hashes() as any[]).toConvertType()[0];
        let act = pagination.items[0];

        assert.equal(act.description, exp.description);
        assert.equal(act.index, exp.index);
        assert.equal(act.isCurrent, exp.isCurrent);
        assert.equal(act.isShow, exp.isShow);
        assert.equal(act.text, exp.text);

    });

}

