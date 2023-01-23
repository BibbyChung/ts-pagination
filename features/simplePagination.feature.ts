import { strict as assert } from "assert";
import { convertTableToTypeArray } from "../src/util";
import {
  getSimplePagination,
  IPageInput,
  IPagination,
  Pager,
} from "../src/_index";

const { Given, When, Then } = require("cucumber");

type pageInfoType = {
  pagerSize: number;
  currentPage: number;
  total: number;
  size: number;
};

let pageInfo: IPageInput;
let pagerSize: number;
let pagination: IPagination;

Given("ud_G ==> prepare the pagination data.", function (dataTable) {
  const inputObj = convertTableToTypeArray<pageInfoType>(dataTable.hashes())[0];
  pageInfo = {
    currentPage: inputObj.currentPage,
    size: inputObj.size,
    total: inputObj.total,
  };
  pagerSize = inputObj.pagerSize;
});

When("ud_G ==> prepare the normal pagination.", function () {
  pagination = getSimplePagination(pageInfo, pagerSize);
});

Then("ud_G ==> the page items should equal those data.", function (dataTable) {
  const expArr = convertTableToTypeArray<Pager>(dataTable.hashes());
  const actArr = pagination.data;

  assert.notEqual(actArr.length, 0);

  for (let i = 0; i < actArr.length; i += 1) {
    const exp = expArr[i];
    const act = actArr[i];

    assert.equal(act.type, exp.type, `=> ${i} rows`);
    assert.equal(act.index, exp.index, `=> ${i} rows`);
    assert.equal(act.isCurrent, exp.isCurrent, `=> ${i} rows`);
    assert.equal(act.isEnabled, exp.isEnabled, `=> ${i} rows`);
    assert.equal(act.text, exp.text, `=> ${i} rows`);
  }
});

Then("ud_G ==> the pagination should equal those data.", function (dataTable) {
  const exp = convertTableToTypeArray<{
    total: number;
    currentPage: number;
  }>(dataTable.hashes())[0];
  const act = pagination;

  assert.equal(act.total, exp.total);
  assert.equal(act.currentPage, exp.currentPage);
});
