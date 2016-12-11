/// <reference path="./../../typings/index.d.ts" />
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
const assert = require("assert");
require("./../extensions");
const simplePagination_1 = require('../code/simplePagination');
let prepareToRun = (_self, tag) => {
    _self.Before({ tags: [tag] }, (scenario) => __awaiter(this, void 0, void 0, function* () {
    }));
    _self.After({ tags: [tag] }, (scenario) => __awaiter(this, void 0, void 0, function* () {
    }));
};
module.exports = function () {
    prepareToRun(this, "@ud_G");
    var pageInfo;
    var pagination;
    this.Given(/^ud_G ==> prepare the pagination data\.$/, function (table) {
        pageInfo = table.hashes().toConvertType()[0];
    });
    this.When(/^ud_G ==> prepare the normal pagination\.$/, function () {
        pagination = new simplePagination_1.SimplePagination(pageInfo.itemSize, pageInfo.current, pageInfo.dataCount, pageInfo.pageSize);
        pagination.build();
    });
    this.Then(/^ud_G ==> the page items should equal those data\.$/, function (table) {
        let expArr = table.hashes().toConvertType();
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
        let exp = table.hashes().toConvertType()[0];
        let act = pagination;
        assert.equal(act.total, exp.total);
        assert.equal(act.current, exp.current);
    });
};
//# sourceMappingURL=simplePagination.js.map
