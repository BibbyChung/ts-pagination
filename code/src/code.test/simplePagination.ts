import * as assert from 'assert';
import './../extensions';
import { SimplePagination } from '../code/simplePagination';
import { PagerItem } from '../code/core/pagerItem';

const prepareToRun = (_self, tag: string) => {
  _self.Before({ tags: [tag] }, (scenario: any) => {

  });
  _self.After({ tags: [tag] }, (scenario) => {

  });
};

export = function () {

  prepareToRun(this, '@ud_G');

  let pageInfo: {
    pagerSize: number,
    currentIndex: number,
    dataTotal: number,
    dataSize: number,
  };
  let pagination: SimplePagination;

  this.Given(/^ud_G ==> prepare the pagination data\.$/, function (table) {
    pageInfo = (table.hashes() as any[]).toConvertType()[0];
  });

  this.When(/^ud_G ==> prepare the normal pagination\.$/, function () {

    pagination = new SimplePagination(pageInfo.pagerSize, pageInfo.currentIndex, pageInfo.dataTotal, pageInfo.dataSize);
    pagination.build();

  });
  this.Then(/^ud_G ==> the page items should equal those data\.$/, function (table) {

    const expArr: PagerItem[] = (table.hashes() as any[]).toConvertType();
    const actArr = pagination.items;

    for (let i = 0; i < actArr.length; i += 1) {
      const exp = expArr[i];
      const act = actArr[i];

      assert.equal(act.type, exp.type);
      assert.equal(act.index, exp.index);
      assert.equal(act.isCurrent, exp.isCurrent);
      assert.equal(act.isEnabled, exp.isEnabled);
      assert.equal(act.text, exp.text);
    }

  });

  this.Then(/^ud_G ==> the pagination should equal those data\.$/, function (table) {

    const exp: {
      total: number,
      currentIndex: number,
    } = (table.hashes() as any[]).toConvertType()[0];
    const act = pagination;

    assert.equal(act.total, exp.total);
    assert.equal(act.currentIndex, exp.currentIndex);

  });

};
