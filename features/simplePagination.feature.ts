import { PagerItem, SimplePagination } from "../src/main";
import { convertTableToTypeArray } from "../src/util";

const { Given, When, Then } = require("cucumber");
const assert = require("assert").strict

type pageInfoType = {
  pagerItemSize: number,
  currentIndex: number,
  dataTotal: number,
  dataSize: number,
};

let pageInfo: pageInfoType;
let pagination: SimplePagination;

Given('ud_G ==> prepare the pagination data.', function (dataTable) {
  pageInfo = convertTableToTypeArray<pageInfoType>(dataTable.hashes())[0];
});

When('ud_G ==> prepare the normal pagination.', function () {
  pagination = new SimplePagination(pageInfo.pagerItemSize, pageInfo.currentIndex, pageInfo.dataTotal, pageInfo.dataSize);
  pagination.build();
});

Then('ud_G ==> the page items should equal those data.', function (dataTable) {
  const expArr = convertTableToTypeArray<PagerItem>(dataTable.hashes());
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

Then('ud_G ==> the pagination should equal those data.', function (dataTable) {
  const exp = convertTableToTypeArray<{
    total: number,
    currentIndex: number,
  }>(dataTable.hashes())[0];
  const act = pagination;

  assert.equal(act.total, exp.total);
  assert.equal(act.currentIndex, exp.currentIndex);
});