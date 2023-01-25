import { strict as assert } from "assert";
import { convertTableToTypeArray } from "./common/util";
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

Given("ygtN ==> prepare the pagination data.", function (dataTable) {
  const inputObj = convertTableToTypeArray<pageInfoType>(dataTable.hashes())[0];
  pageInfo = {
    currentPage: inputObj.currentPage,
    size: inputObj.size,
    total: inputObj.total,
  };
  pagerSize = inputObj.pagerSize;
});

When("ygtN ==> prepare the normal pagination.", function (dataTable) {
  const obj = convertTableToTypeArray<{
    First: string;
    PreGroup: string;
    Previous: string;
  }>(dataTable.hashes())[0];

  pagination = getSimplePagination(pageInfo, pagerSize, {
    firstText: obj.First,
    preGroupText: obj.PreGroup,
    PreText: obj.Previous,
  });
});

Then("ygtN ==> the page items should equal those data.", function (dataTable) {
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

Then("ygtN ==> the pagination should equal those data.", function (dataTable) {
  const exp = convertTableToTypeArray<{
    total: number;
    currentPage: number;
  }>(dataTable.hashes())[0];
  const act = pagination;

  assert.equal(act.total, exp.total);
  assert.equal(act.currentPage, exp.currentPage);
});
